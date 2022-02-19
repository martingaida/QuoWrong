window.addEventListener('DOMContentLoaded', (event)=>{

    const editForms = document.querySelectorAll('#edit-form')

    const deleteForms = document.querySelectorAll('#delete-form')

    const voteForms = document.querySelectorAll('#vote-form')


    const editQuestionAppear = document.querySelector('#question-edit-appear')
    const editQuestionDissapear = document.querySelector('#question-edit-disapear')
    const editQuestionSubmit = document.querySelector('#qa-detail-edit')




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

            let vote = 0;
            for(let i = 0; i < voteCount.data.length; i++) {

                if (voteCount.data[i].upVote) {
                    vote++;
                } else {
                    vote--;
                }
            }
            // voteCount.data.forEach(vote => {
            //     if (vote.upVote) {
            //         vote+=1
            //     } else {
            //         vote-=1
            //     }
            // })
            console.log(voteCount.data)
            const voteCounter = document.querySelector(`#vote-count-${questionId}`)
            voteCounter.textContent = vote.toString()
        })

    });

    if(editQuestionAppear) {
        editQuestionAppear.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('input.edit-form-hidden-fields, label.edit-form-hidden-fields, button.edit-form-hidden-fields, textarea.edit-form-hidden-fields').forEach(field => {
                field.hidden = false;
            })
        })

        editQuestionDissapear.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('input.edit-form-hidden-fields, label.edit-form-hidden-fields, button.edit-form-hidden-fields, textarea.edit-form-hidden-fields').forEach(field => {
                field.hidden = true;
            })
        })

        editQuestionSubmit.addEventListener('submit', (e) => {
            document.querySelectorAll('input.edit-form-hidden-fields, label.edit-form-hidden-fields, button.edit-form-hidden-fields, textarea.edit-form-hidden-fields').forEach(field => {
                field.hidden = true;
            })
        } )
    }

})
