import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.less';
import { Row, Select, Card, Col, PageHeader } from 'antd';
import { Button, Radio, Upload } from 'antd';
import { DownloadOutlined,ImportOutlined, UploadOutlined, StarOutlined } from '@ant-design/icons';


const { Option } = Select;

function App() {

  // let tilte = <ImportOutlined /> + 'Importacao';
  return (
    <Card>
      <PageHeader title="Importacao"/>
      <Card style={{ width: '87%', margin: 'auto' }} >
        <Row gutter={24} >
          <Col span={6} xs={12} sm={16}>
            <label style={{ margin: '10px' }}>Descrição</label>
            <Select
              
              style={{ margin: '10px', width: '100%', }}
              placeholder="Selecione Tabela"
              // defaultValue={['']}
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="china" label="China">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="China">
                    🇨🇳
                  </span>
                  China (中国)
                </div>
              </Option>
              <Option value="usa" label="USA">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="USA">
                    🇺🇸
                  </span>
                  USA (美国)
                </div>
              </Option>
              <Option value="japan" label="Japan">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Japan">
                    🇯🇵
                  </span>
                  Japan (日本)
                </div>
              </Option>
              <Option value="korea" label="Korea">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Korea">
                    🇰🇷
                  </span>
                  Korea (韩国)
                </div>
              </Option>
            </Select>
          </Col>
          <Col span={6} xs={12} sm={16}>

          <label style={{ margin: '10px' }}>Modulo</label>
            <Select
              
              style={{ width: '100%', margin: '10px', }}
              placeholder="Selecione Modulo"
              // defaultValue={['']}
              onChange={handleChange}
              optionLabelProp="label"
            >
              <Option value="china" label="China">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="China">
                    🇨🇳
                  </span>
                  China (中国)
                </div>
              </Option>
              <Option value="usa" label="USA">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="USA">
                    🇺🇸
                  </span>
                  USA (美国)
                </div>
              </Option>
              <Option value="japan" label="Japan">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Japan">
                    🇯🇵
                  </span>
                  Japan (日本)
                </div>
              </Option>
              <Option value="korea" label="Korea">
                <div className="demo-option-label-item">
                  <span role="img" aria-label="Korea">
                    🇰🇷
                  </span>
                  Korea (韩国)
                </div>
              </Option>
            </Select>
          </Col>
          <Col span={2} xs={8} sm={16}>
           
          <label style={{ margin: '10px' }}>Template</label>
            <Button type="primary" icon={<DownloadOutlined />}
              style={{  margin: '10px',  }}>Baixar</Button>
           
          </Col>
          
          <Col span={2} xs={8} sm={16}>
            
            <label style={{ margin: '10px'}}>Importar</label>
            <Upload>
              <Button icon={<UploadOutlined />}
                style={{  margin: '10px',backgroundColor: 'green', color: 'white' }}>Importar</Button>
            </Upload>
            
          </Col>





        </Row>
      </Card>
    </Card>
  );
}

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default App;
