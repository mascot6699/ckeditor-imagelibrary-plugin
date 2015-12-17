
CKEDITOR.dialog.add( 'imagelibraryDialog', function( editor ) {
	return {
    

		// Basic properties of the dialog window: title, minimum size.
		title: 'Image Library Properties',
		minWidth: 400,
		minHeight: 200,

		// Dialog window content definition.
		contents: [
			{
				// Definition of the Basic Settings dialog tab (page).
				id: 'tab-basic',
				label: 'Search Settings',

				// The tab content.
				elements: [
					{
						// Text input field for the abbreviation text.
						type: 'text',
						id: 'search',
						label: 'Search Term',
            onChange: function() {
                var a ="empty";
                function getImageSearchResults(search_term) {
                     $(editor).ready(function(){
                     $.ajax({
                         url: "/v1.0/image/searchapi/",
                         method : "POST",
                         dataType: 'json',
                         headers: {'Content-Type':'application/json'},
                         data: JSON.stringify({"search":search_term}),
                         success: function(results){
                             console.log(results)
                             a = results
                         },
                         error: function(results){
                             alert(error);
                         }
                     });
                 });
    
              }
              if(jQuery) {
                console.log("umang");
                console.log(this.getValue('search'));
                var search_term = this.getValue('search');
                getImageSearchResults(search_term);
                setTimeout(function(){
                  console.log("THIS IS");
                }, 2000);
                console.log("a=",a);
              }
            },

						// Validation checking whether the field is not empty.
						validate: CKEDITOR.dialog.validate.notEmpty( "Search term field cannot be empty." )
					},
//          {
//						// Text input field for the abbreviation title (explanation).
//						type: 'button',
//						id: 'searchbutton',
//						label: 'search',
//            filebrowser: {
//              action: "Browse",
//              target: "Link:txtUrl",
//              url: "/v1.0/image/searchapi/"
//          }
//					},
					{
						// Text input field for the abbreviation title (explanation).
						type: 'text',
						id: 'url',
						label: 'Selected Url',
						validate: CKEDITOR.dialog.validate.notEmpty( "Url field cannot be empty." )
					},
          {
						// Text input field for the abbreviation title (explanation).
						type: 'text',
						id: 'height',
						label: 'Height',
						validate: CKEDITOR.dialog.validate.notEmpty( "Height field cannot be empty." )
					},
          {
						// Text input field for the abbreviation title (explanation).
						type: 'text',
						id: 'width',
						label: 'Width',
						validate: CKEDITOR.dialog.validate.notEmpty( "Width field cannot be empty." )
					}
				]
			}
		],

		// This method is invoked once a user clicks the OK button, confirming the dialog.
		onOk: function() {

			// The context of this function is the dialog object itself.
			// http://docs.ckeditor.com/#!/api/CKEDITOR.dialog
			var dialog = this;

			// Create a new <abbr> element.
			var abbr = editor.document.createElement( 'img' );

			// Set element attribute and text by getting the defined field values.
			abbr.setAttribute( 'src', dialog.getValueOf( 'tab-basic', 'url' ) );
			abbr.setAttribute( 'height', dialog.getValueOf( 'tab-basic', 'height' ) );
			abbr.setAttribute( 'width', dialog.getValueOf( 'tab-basic', 'width' ) );
			abbr.setAttribute( 'alt', dialog.getValueOf( 'tab-basic', 'search' ) );
//			abbr.setText( dialog.getValueOf( 'tab-basic', 'search' ) );


			// Finally, insert the element into the editor at the caret position.
			editor.insertElement( abbr );
		}
	};
});
