import React from 'react'
import { Button } from '@material-ui/core';

import { Titlebar, Color } from 'custom-electron-titlebar'

var titlebar = new Titlebar({
	backgroundColor: Color.fromHex('#2d326b')
});
titlebar.updateMenu(null);
titlebar.updateTitle("Rope Messenger");

const App = () => {
	return (
		<div className='app'>
		</div>
	)
}

export default App
