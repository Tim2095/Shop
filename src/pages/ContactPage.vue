<template>
  <div>
    <div class="contact_form__container">
      <form>
        <div class="form-container">
          <div class="form-heading">
            <h1>Contact Us</h1>
            <h2>We'd love to hear ftrom you, please drop us a line if you've any query</h2>
          </div>
          <div class="contact-name">
            <div>
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" />
            </div>
            <div>
              <label for="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </div>
          </div>
          <div class="contact-email">
            <label for="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div class="contact-message">
            <label for="msg">Message</label>
            <textarea id="msg" cols="30" rows="10"></textarea>
          </div>
          <div class="submit-btn-container">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.contact_form__container {
  padding: 2rem;
}

form {
  color: #fff;
  label {
    margin-bottom: 1rem;
  }
  .form-container {
    max-width: 70rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    background: gray;
    padding: 2rem;
    margin-bottom: 2rem;
    .contact-name {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
      font-size: 2rem;
      div {
        width: 100%;
        display: flex;
        flex-flow: column;
        gap: 1rem;

        input {
          height: 2rem;
        }
      }
    }
    .contact-email {
      display: flex;
      flex-flow: column;
      font-size: 2rem;
      
      input {
        height: 2rem;
      }
    }
    .contact-message {
      display: flex;
      flex-flow: column;
      font-size: 2rem;

      textarea {
        resize: none;
      }
    }

    button {
      padding: 1rem 4rem;
      cursor: pointer;
      background: #54B4D3;
      border: none;
      color: #fff;
      font-size: 2rem;
    }
  }
}
</style>
