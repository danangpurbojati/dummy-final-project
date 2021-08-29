import React from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../../components/DashboardLayout';
import { Button, Row, Col } from 'antd';

const DetailInfoBank = () => {
    return (
        <DashboardLayout>
            <h1>Info Antrian Hari Ini</h1>

            <div style={{margin: "24px 0"}}>
                <Row>
                    <Col span={10}>
                        <p>Bank</p>
                    </Col>
                    <Col span={1}>
                        <p>:</p>
                    </Col>
                    <Col span={13}>
                        <p>Bank KCP Banjaran</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <p>Alamat</p>
                    </Col>
                    <Col span={1}>
                        <p>:</p>
                    </Col>
                    <Col span={13}>
                        <p>Jl Banjaran Bandung</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={10}>
                        <p>Nomor Antrian yang sedang dilayani</p>
                    </Col>
                    <Col span={1}>
                        <p>:</p>
                    </Col>
                    <Col span={13}>
                        <p>23</p>
                    </Col>
                </Row>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button type="primary">Kembali</Button>
                <Button type="primary">Booking Untuk Besok</Button>
            </div>
            <p style={{textAlign:'right', color: 'red', marginTop: 16}} className="text-end mt-3">*Kuota Besok Penuh</p>
        </DashboardLayout>
    )
}

export default DetailInfoBank
