window.addEventListener('DOMContentLoaded', (event)=>{

    const editForms = document.querySelectorAll('#edit-form')

    const deleteForms = document.querySelectorAll('#delete-form')

    const voteForms = document.querySelectorAll('#vote-form')

    editForms.forEach(form => {
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

    });

    deleteForms.forEach(form => {

        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            const formData = new FormData(form);
            const answerId = formData.get('answerId');

            const res = await fetch(`/api/delete/${answerId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                })
            });

            const data = await res.json();
            console.log(data)

            if (data.message === "Success") {
                const container = document.querySelector(`#contentDisplay-${answerId}`)
                const editForm = document.querySelector(`#edit-form`)
                const deleteForm = document.querySelector(`#delete-form`)
                editForm.remove();
                deleteForm.remove()
                container.remove()
            }

        });

    });

    voteForms.forEach(form => {

        form.addEventListener('submit', async (e) => {

            e.preventDefault();
            const formData = new FormData(form);
            const questionId = formData.get('questionId');
            const userId = formData.get('userId');
            const upVote = formData.get('upVote');
            
            const res = await fetch(`/api/questionVotes/query/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    questionId,
                    userId,
                    upVote
                })
            });
            const voteCount = await res.json()
            console.log(voteCount)
        })
    });


    /*
    form(action='/questionvotes' method='post' id='vote-form')
        input(type='hidden' name='_csrf' value=csrfToken)
        input(type='hidden' name='questionId' value=question.id)
        input(type='hidden' name='upVote' value='true')
        button(type='submit' class='btn-vote') &#8679
        p= vote
    form(action='/questionvotes/delete' method='post')
        input(type='hidden' name='_csrf' value=csrfToken)
        input(type='hidden' name='questionId' value=question.id)
        input(type='hidden' name='upVote' value='false')
        button(type='submit' class='btn-vote') &#8681
    */
})
