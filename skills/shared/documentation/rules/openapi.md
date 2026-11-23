# OpenAPI

Maintain one OpenAPI contract per HTTP server, using `documentations/openapi.yaml` for the project's server. Document only implemented interfaces during initialization and the interfaces changed by the selected feature during updates. Follow the existing server's routes, schemas, authentication, errors, and naming conventions.

Use reusable components where helpful, describe meaningful request and response behavior, and keep examples consistent with the schemas. Validate the YAML and OpenAPI structure with available tools; preserve unrelated operations and existing contracts.
