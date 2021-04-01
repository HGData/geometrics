searchNodes=[{"doc":"Documentation for Geometrics.","ref":"Geometrics.html","title":"Geometrics","type":"module"},{"doc":"Configures OpenTelemetry to collect traces from Phoenix, Ecto, and LiveView.","ref":"Geometrics.OpenTelemetry.Handler.html","title":"Geometrics.OpenTelemetry.Handler","type":"module"},{"doc":"When crashes or exits occur, rather than exceptions, no telemetry fires to close open spans. To get around this, we keep a list of open spans in the Logger.metadata, and cheOTLogger in a Geometrics.OpenTelemetry.Logger.If a crash occurs where any :ot_spans live in the metadata, a [:geometrics, :open_telemetry, :exit] telemetry event is fired, which gets picked up by our handle_exception binding.","ref":"Geometrics.OpenTelemetry.Handler.html#add_ot_span_to_logger/4","title":"Geometrics.OpenTelemetry.Handler.add_ot_span_to_logger/4","type":"function"},{"doc":"Returns a specification to start this module under a supervisor.See Supervisor.","ref":"Geometrics.OpenTelemetry.Handler.html#child_spec/1","title":"Geometrics.OpenTelemetry.Handler.child_spec/1","type":"function"},{"doc":"Caught exits are cast to ourselves, so that we do not interrupt the logger.","ref":"Geometrics.OpenTelemetry.Handler.html#handle_cast/2","title":"Geometrics.OpenTelemetry.Handler.handle_cast/2","type":"function"},{"doc":"Intended for exceptions that happen during spans that have been opened by OpentelemetryPhoenix or OpentelemetryEcto. Those libraries do not put a high-level :status key in the data, which we do for our spans to normalize across different event types.","ref":"Geometrics.OpenTelemetry.Handler.html#handle_errors/4","title":"Geometrics.OpenTelemetry.Handler.handle_errors/4","type":"function"},{"doc":"Catch message around exits and exceptions, to make sure that spans are marked with crash/exception status and closed.","ref":"Geometrics.OpenTelemetry.Handler.html#handle_exception/4","title":"Geometrics.OpenTelemetry.Handler.handle_exception/4","type":"function"},{"doc":"Set status to :ok when a :stop event fires, which suggests that whatever happened was successful, ie did not crash or raise.","ref":"Geometrics.OpenTelemetry.Handler.html#handle_success/4","title":"Geometrics.OpenTelemetry.Handler.handle_success/4","type":"function"},{"doc":"Callback implementation for GenServer.init/1.","ref":"Geometrics.OpenTelemetry.Handler.html#init/1","title":"Geometrics.OpenTelemetry.Handler.init/1","type":"function"},{"doc":"Given a telemetry event signaling that an action has begun, open a new child span. Makes sure that a parent span is either created, or attached to, so that events appear as siblings in a single trace spanning the LiveView session.Note that child spans pull attributes off of the socket that are only present if the :connect_info is configured to include them in the Endpoint:socket &quot;/live&quot;, Phoenix.LiveView.Socket, websocket: [ connect_info: [ :peer_data, :trace_context_headers, :user_agent, :x_headers, session: @session_options ] ]","ref":"Geometrics.OpenTelemetry.Handler.html#open_child_span/4","title":"Geometrics.OpenTelemetry.Handler.open_child_span/4","type":"function"},{"doc":"Sets up telemetry attachments. Some bindings are registered via OpentelemetryPhoenix and OpentelemetryEcto, but since neither of those handle LiveView we attach our own bindings for those events.Some bindings are attached before the library code, so that we can add some normalized attributes across most events.","ref":"Geometrics.OpenTelemetry.Handler.html#setup/0","title":"Geometrics.OpenTelemetry.Handler.setup/0","type":"function"},{"doc":"","ref":"Geometrics.OpenTelemetry.Handler.html#start_link/1","title":"Geometrics.OpenTelemetry.Handler.start_link/1","type":"function"},{"doc":"Capture crashes and exits with open spans. This helps to capture problems where a system is overloaded or under-optimized, and timeouts occur. Timeout errors (in Ecto, or when calling into GenServers) typically trigger exit instead of raising exceptions.Frameworks such as Phoenix and Phoenix.LiveView use :telemetry, with wrappers that rescue and reraise exceptions, but which do not catch exits. For this reason, exits and other timeout errors can interrupt application tracing, since spans opened in processes may otherwise never be closed, and therefore never be exported.This module requires that when a span is opened, it beReferences:https://github.com/elixir-lang/elixir/blob/v1.11.3/lib/logger/lib/logger/backends/console.ex","ref":"Geometrics.OpenTelemetry.Logger.html","title":"Geometrics.OpenTelemetry.Logger","type":"module"},{"doc":"Callback implementation for :gen_event.handle_call/2.","ref":"Geometrics.OpenTelemetry.Logger.html#handle_call/2","title":"Geometrics.OpenTelemetry.Logger.handle_call/2","type":"function"},{"doc":"Callback implementation for :gen_event.handle_event/2.","ref":"Geometrics.OpenTelemetry.Logger.html#handle_event/2","title":"Geometrics.OpenTelemetry.Logger.handle_event/2","type":"function"},{"doc":"Callback implementation for :gen_event.handle_info/2.","ref":"Geometrics.OpenTelemetry.Logger.html#handle_info/2","title":"Geometrics.OpenTelemetry.Logger.handle_info/2","type":"function"},{"doc":"Callback implementation for :gen_event.init/1.","ref":"Geometrics.OpenTelemetry.Logger.html#init/1","title":"Geometrics.OpenTelemetry.Logger.init/1","type":"function"},{"doc":"When ending a span, it no longer needs to be tracked by the Logger.","ref":"Geometrics.OpenTelemetry.Logger.html#pop_span_ctx/0","title":"Geometrics.OpenTelemetry.Logger.pop_span_ctx/0","type":"function"},{"doc":"Given an otel span context, ensure that it is saved in the Logger metadata for the current process. If the process crashes or exits, the custom logger defined by this file will receive an error event, and can send telemetry to indicate that the span should be closed.","ref":"Geometrics.OpenTelemetry.Logger.html#track_span_ctx/1","title":"Geometrics.OpenTelemetry.Logger.track_span_ctx/1","type":"function"},{"doc":"Provides a mechanism for an OpenTelemetry trace created","ref":"Geometrics.Phoenix.View.html","title":"Geometrics.Phoenix.View","type":"module"},{"doc":"","ref":"Geometrics.Phoenix.View.html#collector_host/0","title":"Geometrics.Phoenix.View.collector_host/0","type":"function"},{"doc":"","ref":"Geometrics.Phoenix.View.html#meta_tags/1","title":"Geometrics.Phoenix.View.meta_tags/1","type":"function"},{"doc":"","ref":"Geometrics.Phoenix.View.html#traceparent/1","title":"Geometrics.Phoenix.View.traceparent/1","type":"function"},{"doc":"Ensure that the current OpenTelemetry context is available to the conn.","ref":"Geometrics.Plug.OpenTelemetry.html","title":"Geometrics.Plug.OpenTelemetry","type":"module"},{"doc":"","ref":"Geometrics.Plug.OpenTelemetry.html#call/2","title":"Geometrics.Plug.OpenTelemetry.call/2","type":"function"},{"doc":"","ref":"Geometrics.Plug.OpenTelemetry.html#current_context/1","title":"Geometrics.Plug.OpenTelemetry.current_context/1","type":"function"},{"doc":"","ref":"Geometrics.Plug.OpenTelemetry.html#init/1","title":"Geometrics.Plug.OpenTelemetry.init/1","type":"function"},{"doc":"","ref":"Mix.Tasks.Geometrics.Install.html","title":"Mix.Tasks.Geometrics.Install","type":"task"},{"doc":"Callback implementation for Mix.Task.run/1.","ref":"Mix.Tasks.Geometrics.Install.html#run/1","title":"Mix.Tasks.Geometrics.Install.run/1","type":"function"},{"doc":"OverviewThis library attempts to encode opinions and documentation for instrumenting an application with traces. It is in essence a wrapper for OpenTelemetry, which is a cross-language and platform-agnostic specification for creating application traces and exporting them into tools that can later visualize the traces.At the time of writing, OpenTelemetry has just reached 1.0 of its specification, and many details of how to implement it are lightly documented. OpenTelemetry is the joining of two large open initiatives, OpenCensus and OpenTracing.","ref":"overview.html","title":"Overview","type":"extras"},{"doc":"What the heck is application tracing?Fundamentally, it is instrumenting code, specifically such that the execution of blocks of code can be later visualized. These spans of code execution may be nested within a parent span, each span including timing data and attributes. The combination of all of the spans for a specific block of time represent a trace.In terms of OpenTelemetry, every trace should include a single root span, within which there may be N trees of child spans. Parent spans may or may not be closed before their children—in a distributed system with async processing, a trace may span multiple systems, with requests completing even though other process complete actions initiated by the request.Let us take, as an example, an HTTP request to a Phoenix controller.The HTTP request consists of a request and a response. At some point in the request, a span may be opened. Since this is the first span, representing the root, a trace-id is generated. Inside the controller action, one or more database queries may be made (each wrapped in its own span, but inheriting the trace-id), after which the renderer executes and a response is sent to the client. After the response is sent, callback functions may be executed before the cowboy process exits. Some time either before or after the callbacks, the root span is ended.This might be represented by the following time-based visualization: | GET / ------------------------------------------------------------------- | | db query 1 | | db query 2 | | db query 3 | | render -- | | response | | callback 1 | | callback 2 |","ref":"overview.html#application-tracing","title":"Overview - Application Tracing","type":"extras"},{"doc":"A trace may involve multiple applications, or multiple runtimes. For instance, an HTTP request may generate asynchronous jobs in a tool such as Oban. A web application may involve browser-based Javascript as well as an Elixir backend.For this reason a trace-id may be propagated between different systems. There are different ways this could be implemented, but OpenTelemetry attempts to provide mechanisms that can be configured per-application (so that every span touch point does not need to manually execute the correct propagators).Two popular mechanisms of propagating traces between systems are the (W3C Trace-Context)[https://www.w3.org/TR/trace-context/] and (B3 Propagation)[https://github.com/openzipkin/b3-propagation]. The former defines a single format for encoding trace-id, span-id, and trace-specific flags in a traceparent header. The latter is implemented by many open source trace aggregators.Geometrics does two things to propagate traces from Phoenix to Javascript. First, there is a plug that sets things from the current trace onto the conn, in private attributes as well as response headers. Using the provided Phoenix view helpers in the root layout also writes out configuration via meta tags that the javascript can hook into. Propagating the trace back to other contexts (XHTML requests, websockets, live view, etc) may require some manual integration. Theoretically, propagation mechanisms can be introduced that do everything automatically—in practice this may not be possible (for instance, with Phoenix Channel/LiveView javascript which does not not provide automatic hooks to alter connection headers).","ref":"overview.html#distributed-tracing-ie-propagation","title":"Overview - Distributed Tracing (ie Propagation)","type":"extras"},{"doc":"Many of us are familiar with the concept of metrics. How metrics overlaps with tracing may not be clear, however.A metric tends to be an individual data point encapsulating some event at some point in time. When large amounts of metrics are produced, many systems begin aggregating the metrics. At any point in time, a tool for visualizing application metrics may only retain computed statistics and aggregations (sums, 95th percentile, etc).Tracing takes a different approach, which is to capture correlated runtime data across spans of time, and send raw data to backend systems. If large amounts of traces are produced, they may be sampled at some rate to filter the traces that are actually sent.Metrics tend to aggregate before exporting. Tracing sends as much data as possible, and relies on exporting to more sophisticated back-ends that can aggregate and analyze the aggregate traces on the fly.","ref":"overview.html#tracing-vs-metrics","title":"Overview - Tracing vs Metrics","type":"extras"},{"doc":"One thing that is important about OpenTelemetry is that it provides a specification for implementing application tracing across multiple languages, a normalized set of attributes for different types of traces (HTTP requests vs database queries, for example), and a vendor-agnostic protocol for exporting span traces to various 3rd-party tracing services (Honeycomb, Jaeger, Zipkin).This means that a team can instrument their applications in one way, and swap out the service(s) used to analyze traces if needed. In other words, you can choose to instrument your frontend and backend respectively with opentelemetry-js and opentelemetry-erlang, and have both those libraries report data to Honeycomb using a consistent standard. The way this was achieved was by standardizing that all OpenTelemetry language implementations must be able to communicate with a running agent called an OpenTelemetry collector over HTTP.The OpenTelemetry collector agent is used to collect traces using the vendor-agnostic protocol, then forward the traces to a 3rd party tracing service. This allows applications to export traces via a single mechanism, without having to care what happens later.The diagram below illustrates how this looks.","ref":"overview.html#exporting-traces","title":"Overview - Exporting traces","type":"extras"},{"doc":"Spans are only valid if they are ended, giving them a duration.Spans are only exported if they are valid.Timeout errors in Elixir/Erlang usually signal process exits, rather than raising exceptions.:telemetry helpers rescue/reraise exceptions, but do not catch exits.Helper libraries like OpentelemetryPhoenix and OpentelemetryEcto hook into :telemetry, since they are unable to alter Phoenix/Ecto runtime code to introduce OpenTelemetry-specific helpers.Ergo... an overloaded system that begins timing out in GenServer calls or database queries may lose the most important traces, ie those associated with the timeouts. See the Phoenix + Ecto page for more info.","ref":"overview.html#opentelemetry-gotchas","title":"Overview - OpenTelemetry gotchas","type":"extras"},{"doc":"Phoenix + EctoGeometrics uses OpentelemetryPhoenix and OpentelemetryEcto to set up some basic bindings on :telemetry events. This is useful, even though it's not the recommended way of using OpenTelemetry.","ref":"phoenix.html","title":"Phoenix + Ecto","type":"extras"},{"doc":"OpenTelemetry recommends that spans be created by wrapping code blocks with the OpenTelemetry.Tracer.with_span/3 macro. This has the benefit of rescuing exceptions and catching exits. Phoenix and Ecto instead use :telemetry, with a block syntax that sends :start, :stop, and :exception messages—the downside being that exits are not caught.Geometrics attempts to solve this.Geometrics adds extra telemetry attachments, so that after a span is opened it is added to the Logger.metadata. This allows us to watch process exits in a custom logger module... if a process crashes or exits with an open span, we can send a custom telemetry event to make sure spans aren't orphaned.","ref":"phoenix.html#process-crashes-and-exits","title":"Phoenix + Ecto - Process crashes and exits","type":"extras"},{"doc":"OpentelemetryPhoenix does not currently support LiveView. Geometrics adds custom telemetry attachments to watch for :mount and :handle_event events, and put them into a common trace for the current page view.If a traceContext parameter is included in the Javascript that initializes the LiveView session, the trace can be tied back to the initial page load, as well as potentially include other OpenTelemetry spans created in Javascript.Note: before updating OpentelemetryPhoenix, please verify that it does not introduce conflicting tracing code.","ref":"phoenix.html#liveview","title":"Phoenix + Ecto - LiveView","type":"extras"},{"doc":"JavascriptGeometrics provides a few hooks for tracing front-end Javascript along with back-end Elixir. This demonstrates the premise of distributed tracing—in a single trace, one could potentially see the timings of a user's browser page load, then connection to LiveView, along with each event that transpires.","ref":"javascript.html","title":"Javascript","type":"extras"},{"doc":"In order to tie the backend tracing context to front end events, you must provide a set of meta tags in your root layout.&lt;%= Geometrics.Phoenix.View.meta_tags() %&gt;This will create two meta tags:A tag with the name traceparent that contains a unique identifier used by OpenTelemetry to tie traces together. The naming for this meta tag arises from a recent W3C proposal around distributed tracing. It proposes a standard format for headers that lets you identify traces across services. If you're curious to read more about it, check out the proposal here).A tag with the name collector_endpoint whose value is the endpoint url that the frontend will send telemetry events to.","ref":"javascript.html#tracing-across-stack-boundaries","title":"Javascript - Tracing across stack boundaries","type":"extras"},{"doc":"In order aggregate and export trace events, the frontend needs to speak with a public endpoint separate from your Phoenix backend. This endpoint is a running server called an opentelemetry-collector. Its main purpose is to receive requests containing trace information to buffer and export traces to visualization services like Honeycomb.","ref":"javascript.html#collecting-traces","title":"Javascript - Collecting traces","type":"extras"},{"doc":"To use Geometrics' included javascript, you must add it to your package.json: &quot;dependencies&quot;: { ... &quot;geometrics&quot;: &quot;file:../../geometrics&quot;, ... }, Then run npm install","ref":"javascript.html#setup","title":"Javascript - Setup","type":"extras"},{"doc":"To capture spans, you can wrap whatever block of code you wish to capture in a withSpan. This function allows you to pass a name for the span, as well as a function that will wrap the code for the span. This function will also receive a javascript object which represents the span that is being created. In the example below we use this object to pass the context of our frontend event to our LiveView backend via param.import {withSpan, initTracer} from &quot;geometrics&quot; initTracer({ serviceName: 'frontend', logToConsole: true }) const liveSocket = withSpan(&quot;liveSocket.connect()&quot;, (span) =&gt; { const csrfToken = document.querySelector(&quot;meta[name='csrf-token']&quot;).getAttribute(&quot;content&quot;) const options = { params: { _csrf_token: csrfToken, traceContext: span.context() } } const liveSocket = new LiveSocket(&quot;/live&quot;, Socket, options) liveSocket.connect() return liveSocket })Note that we pass the span.context() in the socket connection params as traceContext. We pick up this context on the backend and use it to tie the frontend span with the trace context in the backend.At the moment, it is only possible to record synchronous behavior executed in the context of a withSpan.","ref":"javascript.html#usage","title":"Javascript - Usage","type":"extras"},{"doc":"DeploymentsTo collect trace data in production environments, it is necessary to run the OpenTelemetry collector somewhere in your network that will be accessible from both your frontend and backend. In a Kubernetes deploys, it could be run as a sidecar container. In DigitalOcean deploys, you may need to deploy the otel/opentelemetry-collector-dev:latest docker image as a separate droplet.","ref":"deployment.html","title":"Deployments","type":"extras"},{"doc":"References","ref":"references.html","title":"References","type":"extras"},{"doc":"https://opentelemetry.io/docs/concepts/what-is-opentelemetry/https://opentelemetry.io/docs/erlang/getting-started/https://github.com/open-telemetry/opentelemetry-specification","ref":"references.html#opentelemetry","title":"References - OpenTelemetry","type":"extras"},{"doc":"https://www.w3.org/TR/trace-context/","ref":"references.html#w3c-traces","title":"References - W3C Traces","type":"extras"}]