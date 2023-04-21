document.querySelector('button').addEventListener('click', primary)



function primary(){
  const input = document.querySelector('input').value.toLowerCase()

  fetch(`/api/${input}`)
  .then (res => res.json())
  .then (data => {
    console.log(data)
    document.querySelector('#plus1').innerText = `${input} ${data.plus1}`
    document.querySelector('#plus2').innerText = `${input} ${data.plus2}`
  })

  .catch(err => {
    console.log(`error ${err}`)
   })
}