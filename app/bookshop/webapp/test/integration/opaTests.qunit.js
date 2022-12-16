sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'my/bookshop/bookshop/test/integration/FirstJourney',
		'my/bookshop/bookshop/test/integration/pages/BooksList',
		'my/bookshop/bookshop/test/integration/pages/BooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('my/bookshop/bookshop') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);