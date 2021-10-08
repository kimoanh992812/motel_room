import {
    Button, Checkbox, Col, Form, InputNumber, Row, Select
} from 'antd';
import React from 'react';
import "./Sidebar.scss"

  const { Option } = Select;

  const formItemLayout = {
    labelCol: { span: 24 },
    wrapperCol: { span: 24 },
  };



function Sidebar() {
    const onFinish = (values) => {
        console.log('values is ', values);
    };

    return (
        <section className='sidebar'>
            <div className='sidebar-filters'>
                <Form
                    name="validate_other"
                    {...formItemLayout}
                    onFinish={onFinish}
                    
                >
                    

                    <Form.Item
                        name="type"
                        label="Loại cho thuê"
                        hasFeedback
                        rules={[{ required: true, message: 'Please select !' }]}
                    >
                        <Select placeholder="Please select ">
                        <Option value="room">Căn Hộ </Option>
                        <Option value="home">Nhà</Option>
                        <Option value="motel">Trọ</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="District"
                        label="Quận/Huyện"
                        rules={[{ required: true, message: 'Please select your district!', type: 'array' }]}
                    >
                        <Select mode="multiple" placeholder="Please select your district">
                        <Option value="NguHanhSon">Ngũ Hành Sơn</Option>
                        <Option value="CamLe">Cẩm Lệ</Option>
                        <Option value="HaiChau">Hải Châu</Option>
                        </Select>
                    </Form.Item>
                    
                    <Form.Item label="Giá ">
                        <Row gutter={[16,16]}>
                            <Col span={10}>
                                <Form.Item name="min-price" noStyle >
                                    <InputNumber min={1} max={1000000} placeholder='Min.'/>
                                </Form.Item>
                            </Col>

                            <Col span={10}>
                                <Form.Item name="max-price" noStyle>
                                    <InputNumber min={1} max={100000000}  placeholder='Max.'/>
                                </Form.Item>
                            </Col>

                            <Col span={4}>
                                <span>VND</span>
                            </Col>
                        
                        </Row>
                    </Form.Item>

                    <Form.Item label="Kích Thước">
                        <Row gutter={[16,16]}>
                            <Col span={10}>
                                <Form.Item name="min-size" noStyle >
                                    <InputNumber min={1} max={1000000} placeholder='Min.'/>
                                </Form.Item>
                            </Col>

                            <Col span={10}>
                                <Form.Item name="max-size" noStyle>
                                    <InputNumber min={1} max={100000000}  placeholder='Max.'/>
                                </Form.Item>
                            </Col>
                            
                        </Row>
                    </Form.Item>

                    <Form.Item label="Số Phòng Ngủ">
                        <Row gutter={[16,16]}>
                            <Col span={10}>
                                <Form.Item name="min-room" noStyle >
                                    <InputNumber min={1} max={1000000} placeholder='Min.'/>
                                </Form.Item>
                            </Col>

                            <Col span={10}>
                                <Form.Item name="max-room" noStyle>
                                    <InputNumber min={1} max={100000000}  placeholder='Max.'/>
                                </Form.Item>
                            </Col>
                            
                        </Row>
                    </Form.Item>

                    <Form.Item name="furniture" label="Nội Thất">
                        <Checkbox.Group>
                        <Row>
                            <Col span={24}>
                            <Checkbox value="None" style={{ lineHeight: '32px' }}>
                                Trống
                            </Checkbox>
                            </Col>
                            <Col span={24}>
                            <Checkbox value="Have" style={{ lineHeight: '32px' }} >
                                Được trang bị nội thất
                            </Checkbox>
                            </Col>
                        </Row>
                        </Checkbox.Group>
                    </Form.Item>

                    
                </Form>
            </div>

            <div className='sidebar-social'>
                <div className="fb-page" 
                data-href="https://www.facebook.com/facebook" 
                data-tabs="timeline" data-width="" 
                data-height="" 
                data-small-header="false" 
                data-adapt-container-width="true" 
                data-hide-cover="false" 
                data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore">
                        <a href="https://www.facebook.com/facebook">Facebook</a>
                    </blockquote>
                </div>
            </div>
        </section>
    )
}

export default Sidebar
