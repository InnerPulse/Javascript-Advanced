function validate() {
  document.getElementById('company').addEventListener('change', (e) => {
    document.getElementById('companyInfo').style.display = e.target.checked
      ? 'block'
      : 'none';
  });

  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();

    [username, email, password, confirmPassword, company] = [
      ...e.target.parentNode.children[0].querySelectorAll('div'),
    ].map((e) => e.querySelector('input'));

    const isUsernameValid = /^([A-Za-z0-9]){3,20}$/gm.test(username.value);
    style(isUsernameValid, username);

    const isEmailValid = /^(.+@(.+)?\.(.+)?)$/gm.test(email.value);
    style(isEmailValid, email);

    const isPasswordValid = /^(\w{5,15})$/gm.test(password.value) && password.value;
    style(isPasswordValid, password);

    const isConfPasswordValid = /^[\w]{5,15}$/g.test(confirmPassword.value) && confirmPassword.value;
    style(isConfPasswordValid, confirmPassword);

    const doPasswordsMatch =
      password.value == confirmPassword.value &&
      isPasswordValid &&
      isConfPasswordValid
        ? true
        : false;

    style(doPasswordsMatch, password);
    style(doPasswordsMatch, confirmPassword);

    const allValues = [
      isUsernameValid,
      isEmailValid,
      isPasswordValid,
      isConfPasswordValid,
      doPasswordsMatch,
    ];

    if (company.checked) {
      const companyInput = document.getElementById('companyNumber');
      const companyId = Number(companyInput.value);
      const isCompanyIdValid = companyId >= 1000 && companyId <= 9999;

      style(isCompanyIdValid, companyInput);
      allValues.push(isCompanyIdValid);
    }

    document.getElementById('valid').style.display = allValues.includes(false)
      ? 'none'
      : 'block';

    function style(value, el) {
      if (value) el.style.border = 'none';
       else {
        el.style.border = '';
        el.style.borderColor = 'red';
      }
    }
  });
}