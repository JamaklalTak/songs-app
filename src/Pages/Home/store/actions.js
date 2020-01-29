export const actions = {
    SAVE_DATA: 'SAVE_DATA',
    GET_DATA: 'GET_DATA'
  };
  
export const saveData = (data) => ({
    type: actions.SAVE_DATA,
    data
});

export const getData = (requestBody) => ({
    type: actions.GET_DATA,
    requestBody
});
