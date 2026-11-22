---
title: Extract complex feature logic into hooks
impact: HIGH
impactDescription: keeps components readable without hiding behavior behind an unstructured bag of values
tags: react, hooks, dx, custom-hooks, forms, feature-logic
---

# Extract complex feature logic into hooks

When a component owns complex feature logic, move that logic into a custom hook. This is useful even when the logic is not a browser subscription: forms, modals, mutations, routing, persistence, selected entities, derived values, and user actions often belong together as one feature scenario.

Do not extract just to make a file shorter. Extract when the hook can represent a real unit of behavior with a clear public contract. The component should read like UI composition; the hook should read like the feature controller.

Good candidates:

- form setup, validation schema, submit flow, and watched form values
- modal/disclosure state and commands
- selected item/edit mode state
- mutations plus navigation after success
- cookie/localStorage/session state used by the feature
- action handlers that coordinate several pieces of state

Avoid returning one flat object with everything mixed together. Group the return value by how the component consumes it. Use these buckets as the default vocabulary:

- `form` - form object or form-specific API
- `state` - values the UI reads
- `functions` - commands/event handlers the UI calls
- `refs` - refs the UI attaches to elements
- `features` - nested feature objects such as modals, drawers, popovers, uploaders, or child controllers

This list is flexible. Add another group when the domain needs it, but keep the grouping semantic. Do not invent a group just to avoid naming a value.

## Naming

Name the hook after the component or feature it powers:

- component `CreateRoomForm` -> hook `useCreateRoomForm`
- component `CheckoutFlow` -> hook `useCheckoutFlow`
- component `ProfileSettings` -> hook `useProfileSettings`

When the hook accepts one params object, name the type `Use` + component/feature name + `Params`:

- `useCreateRoomForm(params)` -> `UseCreateRoomFormParams`
- `useCheckoutFlow(params)` -> `UseCheckoutFlowParams`
- `useProfileSettings(params)` -> `UseProfileSettingsParams`

Keep the params type near the hook. Use `interface` for params when the object may grow with the feature.

**Incorrect (component owns the whole feature scenario):**

```tsx
const CreateRoomPage = ({ initialDecks, initialPlayer }: Props) => {
  const router = useRouter();
  const [createRoomMutation, mutationState] = useCreateRoomMutation();
  const playerAvatar = useLocalStorage<string>(KEYS.LOCAL_STORAGE.PLAYER_AVATAR);
  const roomPlayer = useCookie<RoomPlayer | null>(KEYS.COOKIES.ROOM_PLAYER, {
    path: "/",
    initialValue: initialPlayer,
  });
  const customDecks = useCookie<VotingSystem[]>(KEYS.COOKIES.DECKS, {
    path: "/",
    initialValue: initialDecks,
  });
  const playerSettingsModal = useDisclosure();
  const customDeckModal = useDisclosure();
  const [selectedEditDeck, setSelectedEditDeck] = useState<VotingSystem>();

  const createRoomForm = useForm<CreateRoomFormValues>({
    resolver: zodResolver(createRoomFormSchema),
    defaultValues: {
      votingSystem: VOTING_SYSTEMS.SEQUENCE,
      autoReveal: false,
      name: "",
    },
  });

  const onSubmit = createRoomForm.handleSubmit(async (values) => {
    const response = await createRoomMutation({ variables: values });
    if (!response.data) return;

    router.push(ROUTES.ROOM(response.data.createRoom.room._id));
  });

  const onCreateDeck = () => {
    setSelectedEditDeck(undefined);
    customDeckModal.open();
  };

  const onEditDeck = (deck: VotingSystem) => {
    setSelectedEditDeck(deck);
    customDeckModal.open();
  };

  return (
    <CreateRoomView
      form={createRoomForm}
      loading={mutationState.loading}
      roomPlayer={roomPlayer.value}
      roomPlayerAvatar={playerAvatar.value}
      customDecks={customDecks.value}
      selectedEditDeck={selectedEditDeck}
      playerSettingsModal={playerSettingsModal}
      customDeckModal={customDeckModal}
      onSubmit={onSubmit}
      onCreateDeck={onCreateDeck}
      onEditDeck={onEditDeck}
    />
  );
};
```

**Correct (feature logic lives in a hook with grouped return shape):**

```tsx
interface UseCreateRoomFormParams {
  initialDecks: VotingSystem[];
  initialPlayer: RoomPlayer | null;
}

export const useCreateRoomForm = ({
  initialDecks,
  initialPlayer,
}: UseCreateRoomFormParams) => {
  const router = useRouter();
  const [createRoomMutation, createRoomMutationOptions] =
    useCreateRoomMutation();

  const roomPlayerAvatar = useLocalStorage<string>(
    KEYS.LOCAL_STORAGE.PLAYER_AVATAR
  );
  const roomPlayer = useCookie<RoomPlayer | null>(KEYS.COOKIES.ROOM_PLAYER, {
    path: "/",
    initialValue: initialPlayer,
  });
  const customDecksCookie = useCookie<VotingSystem[]>(KEYS.COOKIES.DECKS, {
    path: "/",
    initialValue: initialDecks,
  });

  const playerSettingsModal = useDisclosure();
  const customDeckModal = useDisclosure();
  const [selectedEditDeck, setSelectedEditDeck] = useState<VotingSystem>();

  const createRoomForm = useForm<CreateRoomFormValues>({
    resolver: zodResolver(createRoomFormSchema),
    defaultValues: {
      votingSystem: VOTING_SYSTEMS.SEQUENCE,
      autoReveal: false,
      name: "",
    },
  });

  const onSubmit = createRoomForm.handleSubmit(async (values) => {
    const response = await createRoomMutation({ variables: values });
    if (!response.data) return;

    router.push(ROUTES.ROOM(response.data.createRoom.room._id));
  });

  const onCreateDeck = () => {
    setSelectedEditDeck(undefined);
    customDeckModal.open();
  };

  const onEditDeck = (deck: VotingSystem) => {
    setSelectedEditDeck(deck);
    customDeckModal.open();
  };

  return {
    form: createRoomForm,
    state: {
      name: createRoomForm.watch("name"),
      votingSystem: createRoomForm.watch("votingSystem"),
      roomPlayer: roomPlayer.value,
      roomPlayerAvatar: roomPlayerAvatar.value,
      customDecks: customDecksCookie.value,
      selectedEditDeck,
      loading: createRoomMutationOptions.loading,
    },
    functions: {
      onSubmit,
      onCreateDeck,
      onEditDeck,
    },
    features: {
      playerSettingsModal,
      customDeckModal,
    },
  };
};
```

**Correct consumer (component reads the contract):**

```tsx
const CreateRoomPage = (props: Props) => {
  const createRoom = useCreateRoomForm(props);

  return (
    <CreateRoomView
      form={createRoom.form}
      state={createRoom.state}
      functions={createRoom.functions}
      features={createRoom.features}
    />
  );
};
```

Keep the hook name feature-oriented and aligned with the component or feature boundary. Prefer one hook per cohesive scenario over many tiny hooks that force the component to reassemble the same workflow.

If the return shape grows, split by feature boundary first. For example, move custom deck editing into `useCustomDecks` only when it becomes independently meaningful, not just because the parent hook got longer.
