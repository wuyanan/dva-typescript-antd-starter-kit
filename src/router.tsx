import { Route, Switch, routerRedux } from "dva/router";
import React, { Suspense } from "react";
import Error from "src/components/Error/index";
import SWRDevtools from "@jjordy/swr-devtools";
import { cache, mutate } from "swr";
import BasicLayout from "./layouts/BasicLayout";
import UserLayout from "./layouts/UserLayout";

const { ConnectedRouter } = routerRedux;

export default function ({ history }: any): React.ReactNode {
  return (
    <Error>
      <SWRDevtools cache={cache} mutate={mutate}>
        <ConnectedRouter history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/user">
                <UserLayout />
              </Route>
              <Route path="/">
                <BasicLayout />
              </Route>
            </Switch>
          </Suspense>
        </ConnectedRouter>
      </SWRDevtools>
    </Error>
  );
}
