
// Register the plugin within the editor.
CKEDITOR.plugins.add( 'imagelibrary', {

	// Register the icons.
	icons: 'imagelibrary',

	// The plugin initialization logic goes inside this method.
	init: function( editor ) {

		// Define an editor command that opens our dialog window.
		editor.addCommand( 'imagelibrary', new CKEDITOR.dialogCommand( 'imagelibraryDialog' ) );

		// Create a toolbar button that executes the above command.
		editor.ui.addButton( 'imagelibrary', {

			// The text part of the button (if available) and the tooltip.
			label: 'Insert imagelibrary',

			// The command to execute on click.
			command: 'imagelibrary',

			// The button placement in the toolbar (toolbar group name).
			toolbar: 'insert'
		});

		// Register our dialog file -- this.path is the plugin folder path.
		CKEDITOR.dialog.add( 'imagelibraryDialog', this.path + 'dialogs/imagelibrary.js' );
	}
});
