export function addRequest(titulo, descricao, date, local, banner_id) {
  return {
    type: '@meet/ADD_REQUEST',
    payload: { titulo, descricao, date, local, banner_id },
  };
}

export function editRequest(titulo, descricao, date, local, banner_id, id) {
  return {
    type: '@meet/EDIT_REQUEST',
    payload: { titulo, descricao, date, local, banner_id, id },
  };
}

export function cancelRequest(id) {
  return {
    type: '@meet/CANCEL_REQUEST',
    payload: { id },
  };
}
