import {Meteor} from 'meteor/meteor'
import {render} from 'react-dom'

import App from '../imports/ui/App.js';
import React from "react";

import '../imports/startup/accounts-config.js'

Meteor.startup(() => {
    render(<App/>, document.body)
})