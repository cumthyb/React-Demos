let appState = {
    title: {
      text: 'React.js 小书',
      color: 'red',
    },
    content: {
      text: 'React.js 小书内容',
      color: 'blue'
    }
  }
  
  function stateChanger (state, action) {
    switch (action.type) {
      case 'UPDATE_TITLE_TEXT':
      return {
        ...state,
        title:{
          ...state.title,
          text: action.text
        }
      }
        break
      case 'UPDATE_TITLE_COLOR':
      return { // 构建新的对象并且返回
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
        break
      default:
        break
    }
  }
  
  function renderApp (appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
  }
  
  function renderTitle (title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
  }
  
  function renderContent (content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
  }
  
function createstore(state,stateChanger){
  let linsters=[];
  let subscribe=(linster)=>linsters.push(linster);
  let getState=()=>state;
  let dispatch=(action)=>{
    stateChanger(state,action);
    linsters.forEach((linster)=>linster())
  };
  return {getState,subscribe,dispatch};
}

  const store=createstore(appState,stateChanger);
  store.subscribe(()=>renderApp(store.getState())); 
  renderApp(appState) // 首次渲染页面
  store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《React.js 小书》' });
  store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'blue' });
 
