onEvent('worldgen.remove', event => {
	event.removeOres(ores => {
	ores.blocks = ['sullysmod:jade_ore']
	})
})