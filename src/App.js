import 'antd/dist/antd.css';
import './App.css';
import MainPage from './main';
import {Switch, Route, Link, useHistory} from 'react-router-dom'
import UploadPage from './upload'
import ProductPage from './product'
import {Button} from "antd"
import {CloudUploadOutlined} from "@ant-design/icons"

function App(){
  const history = useHistory();
  return <div>
        <div id="header">
          <div id="header-area">
          <Link to="/">
            <img src="/images/logo.png" />
            </Link>
            <Button size="large" 
            onClick={()=>{
              history.push('/Upload')
            }}
            icon={<CloudUploadOutlined />}
            >상품업로드</Button>
          </div>
        </div>
        <div id="body">
    <Switch>
      <Route exact={true} path={"/"}>
    <MainPage />
      </Route>
      <Route exact={true} path={"/product/:id"}> 
    <ProductPage />
      </Route>
      <Route exact={true} path={"/Upload"}>
    <UploadPage />
      </Route>
    </Switch>
    </div>
    <div id="footer"></div>
    </div>
}

export default App;

