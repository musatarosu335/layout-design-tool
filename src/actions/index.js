export const selectImage = url => ({
  type: 'SELECT_IMAGE',
  payload: {
    url,
  },
});

export const inputCompanyName = companyName => ({
  type: 'INPUT_COMPANY_NAME',
  payload: {
    companyName,
  },
});

export const inputTextPosition = textPosition => ({
  type: 'INPUT_TEXT_POSITION',
  payload: {
    textPosition,
  },
});
