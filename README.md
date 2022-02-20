QUOWRONG-

AN APP TO ASK DUMB QUESTIONS AND GIVE DUMB ANSWERS
//https://quo-wrong.herokuapp.com/users/login
^LINK TO LIVE SITE

//https://github.com/martingaida/QuoWrong/wiki
^LINK TO WIKI

QuoWrong is built with Javascrpt, using an express framework.
the database is modeled with sequelize ORM, and the web pages are built with Pug HTML template and are styled with CSS.

while users can Create Read Upddate and Delete Questions, Answers, and Upvotes, the two features that showcase the teams technical abilities are the real time answer edit functionalities and the upvote downvote system. Both are acheived through API calls and the changes are made visable to the user live through DOM manipulation.

while creating QuoWrong the team faced many challenges, from git merge conflicts to complete functionality failure. our biggest road block came durring our work with user authentification where after hours of work, we could not access the session ID in Pug. after tracing our steps and doing research online as a team we were able to figure out our problem was due to an uncaught syntax error.

Below is the front end javascript event listener that allows the page to change an answers content on the database and web page seamlessly.
<!-- editForms.forEach(form => {
        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            const formData = new FormData(form);
            const answerId = formData.get('answerId');
            const questionId = formData.get('questionId');
            const content = formData.get('content');

            const res = await fetch(`/api/edit/${answerId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    questionId,
                    content,
                    answerId
                })
            });
            const data = await res.json()

            console.log(data)

            if(data.errors) {
                const errorBox = document.querySelectorAll('#edit-form > #errorDisplay').forEach(form => {
                    form.hidden = false;
                    form.value = data.errors;
                });

            } else {
                const errorBox = document.querySelectorAll('#edit-form > #errorDisplay').forEach(form => {
                    form.hidden = true;
                });

                const answerDisplay = document.querySelector(`#contentDisplay-${answerId}`).innerHTML = data.data.content

            }
        })

    }); -->
