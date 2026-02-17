
function subscribe(){
  const email = document.getElementById('email').value;
  if(!email){ alert("Enter your email first."); return; }
  window.location.href="mailto:allthewaycarpentry@gmail.com?subject=Subscribe&body=Please add me to updates: "+email;
}
