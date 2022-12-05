const items = document.querySelector('.items');
const input = document.querySelector('.footerInput');
const addButton = document.querySelector('.footerButton');

const onAdd = () => {
  //1. 사용자가 입력한 텍스트를 받아옴
  //2. 아무것도 입력이 안됐을 때 입력이 안되게 함
  //3. 새로운 아이템을 만듬 ( 텍스트 + 삭제 버튼)
  //4. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  //5. 새로 추가된 아이템으로 스크롤링
  //6. 인풋을 초기화 한다.
  const text = input.value;
  if (!text) {
    input.focus(); // 리턴되기 전에 입풋창에 포커스를 주고 가야함. 버튼을 클릭할 때 포커스가 버튼에 가있기 떄문
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
};

const createItem = (text) => {
  const itemRow = document.createElement('li');
  itemRow.className = 'itemRow';

  const item = document.createElement('div');
  item.className = 'item';

  const span = document.createElement('span');
  span.className = 'itemName';
  span.innerText = text;

  const itemBin = document.createElement('button');
  itemBin.className = 'itemBin';
  itemBin.innerHTML = '<i class="far fa-trash-alt"></i>';
  itemBin.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  const itemDivider = document.createElement('div');
  itemDivider.className = 'itemDivider';

  item.appendChild(span);
  item.appendChild(itemBin);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
};

addButton.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
