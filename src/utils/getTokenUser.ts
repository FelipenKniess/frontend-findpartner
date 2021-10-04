export default function getTokenUser(): any {
  const tokenUser = localStorage.getItem('@FindPartner:token');

  if (tokenUser) {
    return JSON.parse(tokenUser);
  }

  return '';
}
