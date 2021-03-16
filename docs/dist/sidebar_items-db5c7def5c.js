sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"},{"anchor":"mix-tasks","id":"Mix Tasks"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"application-tracing","id":"Application Tracing"},{"anchor":"distributed-tracing-ie-propagation","id":"Distributed Tracing (ie Propagation)"},{"anchor":"tracing-vs-metrics","id":"Tracing vs Metrics"},{"anchor":"exporting-traces","id":"Exporting traces"},{"anchor":"opentelemetry-gotchas","id":"OpenTelemetry gotchas"}],"id":"overview","title":"Overview"},{"group":"","headers":[{"anchor":"process-crashes-and-exits","id":"Process crashes and exits"},{"anchor":"liveview","id":"LiveView"}],"id":"phoenix","title":"Phoenix + Ecto"},{"group":"","headers":[{"anchor":"tracing-across-stack-boundaries","id":"Tracing across stack boundaries"},{"anchor":"collecting-traces","id":"Collecting traces"},{"anchor":"usage","id":"Usage"}],"id":"javascript","title":"Javascript"},{"group":"","headers":[],"id":"deployment","title":"Deployments"},{"group":"","headers":[{"anchor":"opentelemetry","id":"OpenTelemetry"},{"anchor":"w3c-traces","id":"W3C Traces"}],"id":"references","title":"References"}],"modules":[{"group":"","id":"Geometrics","sections":[],"title":"Geometrics"},{"group":"","id":"Geometrics.OpenTelemetry.Handler","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"add_ot_span_to_logger/4","id":"add_ot_span_to_logger/4"},{"anchor":"child_spec/1","id":"child_spec/1"},{"anchor":"handle_cast/2","id":"handle_cast/2"},{"anchor":"handle_errors/4","id":"handle_errors/4"},{"anchor":"handle_exception/4","id":"handle_exception/4"},{"anchor":"handle_success/4","id":"handle_success/4"},{"anchor":"init/1","id":"init/1"},{"anchor":"open_child_span/4","id":"open_child_span/4"},{"anchor":"setup/0","id":"setup/0"},{"anchor":"start_link/1","id":"start_link/1"}]}],"sections":[],"title":"Geometrics.OpenTelemetry.Handler"},{"group":"","id":"Geometrics.OpenTelemetry.Logger","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"handle_call/2","id":"handle_call/2"},{"anchor":"handle_event/2","id":"handle_event/2"},{"anchor":"handle_info/2","id":"handle_info/2"},{"anchor":"init/1","id":"init/1"},{"anchor":"pop_span_ctx/0","id":"pop_span_ctx/0"},{"anchor":"track_span_ctx/1","id":"track_span_ctx/1"}]}],"sections":[],"title":"Geometrics.OpenTelemetry.Logger"},{"group":"","id":"Geometrics.Phoenix.View","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"collector_host/0","id":"collector_host/0"},{"anchor":"meta_tags/1","id":"meta_tags/1"},{"anchor":"traceparent/1","id":"traceparent/1"}]}],"sections":[],"title":"Geometrics.Phoenix.View"},{"group":"","id":"Geometrics.Plug.OpenTelemetry","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"call/2","id":"call/2"},{"anchor":"current_context/1","id":"current_context/1"},{"anchor":"init/1","id":"init/1"}]}],"sections":[],"title":"Geometrics.Plug.OpenTelemetry"}],"tasks":[{"group":"","id":"Mix.Tasks.Geometrics.Install","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"run/1","id":"run/1"}]}],"sections":[],"title":"mix geometrics.install"}]}