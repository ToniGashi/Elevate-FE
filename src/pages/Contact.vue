<template>
    <q-page padding>
        <div className='container'>
            <div className='centered q-mb-xl'>
                <h2 className='q-mb-lg'>Have a question?</h2>
                <span className='text-subtitle2'>For us, customer happiness is the number one priority, so we make it extremely easy for you to contact us. Just fill out the form and we will get back to you as soon as possible.</span>
            </div>
            <div class='row justify-evenly'>
                <div>
                    <q-icon name="mail_outline" style="font-size: 350px; color: #212529"></q-icon>
                    <br>
                    <div className='q-ml-xl'>
                      <h4 className='q-my-sm'>Or call us: </h4>
                      <span className='phone'>Our Phone number: <b>+359 232 4892</b></span>
                    </div>
                </div>
                <div>
                    <q-form @submit='onSubmit'>
                        <q-input type='text' v-model='name' placeholder='Enter your name here...' style='width:600px'/>
                        <q-input type='text' v-model='email' placeholder='Enter your email here...' class='q-mt-md'/>
                        <q-select v-model='countrySelected' :options='countryOptions' label='Country' class='q-mt-md'/>
                        <q-select v-model='citySelected' :options='cityOptions' label='City' class='q-mt-md'/>
                        <q-input v-model="text" type='textarea' filled placeholder='Write your text here..' class='q-mt-md'/>
                        <q-btn color='secondary' type='Submit' label='Submit' class='q-mt-md'/>
                    </q-form>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'Contact',
  data: function () {
    return {
      name: '',
      email: '',
      text: '',
      countrySelected: '',
      citySelected: '',
      countryOptions: ['Bulgaria'],
      cityOptions: ['Sofia', 'Plovdiv', 'Varna', 'Burgas']
    }
  },
  methods: {
    onSubmit (e) {
      const fetchData = {
        method: 'POST',
        body: JSON.stringify({
          // eslint-disable-next-line
          "fullName": this.name,
          // eslint-disable-next-line
          "email": this.email,
          // eslint-disable-next-line
          "message": this.text
        }),
        headers: {
          // eslint-disable-next-line
          'Content-Type': 'application/json'
        }
      }

      console.log(fetchData)

      fetch('http://localhost:5000/api/emails/contact', fetchData)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
q-input[type='text'],
q-select{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

.frame {
  width: 300px;
  height: 250px;
  border-radius: 5px;
}

h2 {
  font-family: 'Open Sans Condensed';
  font-size: 62px;
}

.centered {
  text-align: center;
}

.container {
  background-color: #a6e9a6;
  border: 2px solid rgba(0, 0, 0, 0.315);
  border-radius: 10px;
  padding: 10px;
  height: 85vh;
}

iframe {
  position: relative;
}

.phone {
  color: rgb(1, 10, 14);
  text-decoration: underline;
  margin-left: 0.2rem;
}
</style>
