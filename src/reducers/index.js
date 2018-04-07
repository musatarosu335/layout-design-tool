const initialState = {
  images: [
    '/img/sheet_1.jpg',
    '/img/sheet_2.jpg',
    '/img/sheet_3.jpg',
    '/img/sheet_4.jpg',
  ],
  selectedImage: '/img/sheet_1.jpg',
  companyName: 'Hoge株式会社',
  textPosition: 0,
};

const sheetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_IMAGE':
      return ({
        ...state,
        selectedImage: action.payload.url,
      });
    case 'INPUT_COMPANY_NAME':
      return ({
        ...state,
        companyName: action.payload.companyName,
      });
    case 'INPUT_TEXT_POSITION':
      return ({
        ...state,
        textPosition: action.payload.textPosition,
      });
    default:
      return state;
  }
};

export default sheetReducer;
