<script>
  import Dogs from "./component/Dogs.svelte";
  import DogInfo from "./component/DogInfo.svelte";
  import { Router, Route } from "svelte-routing";
</script>

<Router>
  <Route path="/" component={Dogs} />
  <Route path="/dog/:id" let:params>
    <DogInfo id={params.id} />
  </Route>
</Router>

<!-- <Router>
  <Route path="/" component={Dogs} />
  <Route path="/dog/:id" component={DogInfo} />
</Router> -->
