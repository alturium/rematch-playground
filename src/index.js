import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { init } from '@rematch/core'
import { Provider, connect } from 'react-redux'
import store from './store'
import '@atlaskit/css-reset';
import "./stylesheets/index.scss"

import Header from "./Header";
import HomePage from './HomePage'
import BrowsePageWithSidebar from './pages/BrowsePageWithSidebar'
import SelectListExample from './pages/SelectListExample'
import FilterPaneExample from './pages/FilterPaneExample'
import ElementDetailViewExample from './pages/ElementDetailViewExample'
import ObjectViewExample from './pages/ObjectViewExample'
import TableColumnListExample from './pages/TableColumnListExample'
import ActionBarExample from './pages/ActionBarExample'
import QuickSearchExample from './pages/QuickSearchExample'
import FixedHeaderExample from './pages/FixedHeaderExample'
import SelectTableHocExample from './pages/SelectTableHocExample'
import ElementPageExample from './pages/ElementPageExample'
import FilterPaneCollapsibleExample from './pages/FilterPaneCollapsibleExample'
import ElementTableExample from './pages/ElementTableExample'
import CountContainer from './components/containers/CountContainer'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <main role="main" className='main-content' >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/browse-sidebar" component={BrowsePageWithSidebar} />
            <Route exact path="/select-list-example" component={SelectListExample} />
            <Route exact path="/filter-pane-example" component={FilterPaneExample} />
            <Route exact path="/table-column-list-example" component={TableColumnListExample} />
            <Route exact path="/object-view-summary-example" component={ObjectViewExample} />
            <Route exact path="/element-detail-view-example" component={ElementDetailViewExample} />
            <Route exact path="/action-bar-example" component={ActionBarExample} />
            <Route exact path="/quick-search-example" component={QuickSearchExample} />
            <Route exact path="/fixed-header-with-vertical-scroll-example" component={FixedHeaderExample} />
            <Route exact path="/select-table-hoc-example" component={SelectTableHocExample} />
            <Route exact path="/element-page-example" component={ElementPageExample} />
            <Route exact path="/collapsible-example" component={FilterPaneCollapsibleExample} />
            <Route exact path="/element-table-example" component={ElementTableExample} />
            <Route exact path="/count-container" component={CountContainer} />

          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);

render(<App />, document.getElementById("root"));
