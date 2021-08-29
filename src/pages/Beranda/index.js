import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Button, Row, Col } from 'antd';

const Beranda = () => {
    return (
        <DashboardLayout>
            <h3>Detail Booking</h3>
            <div style={{margin: "24px 0"}}>
                <Row>
                    <Col span={5}>
                        <p>Nomor Antrian</p>
                    </Col>
                    <Col span={1}>
                        <p>:</p>
                    </Col>
                    <Col span={18}>
                        <p>23</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}>
                        <p>Bank Tujuan</p>
                    </Col>
                    <Col span={1}>
                        <p>:</p>
                    </Col>
                    <Col span={18}>
                        <p>Bank KCP Banjaran</p>
                    </Col>
                </Row>
                <Row>
                    <Col span={5}>
                        <p>Keperluan Layanan</p>
                    </Col>
                    <Col span={1}>
                        <p>:</p>
                    </Col>
                    <Col span={18}>
                        <p>Transaksi</p>
                    </Col>
                </Row>
            </div>

            <p>Nomor antrian akan dilayani pada tanggal</p>
            <p>Jum'at 9 Juni 2021, pukul 9.00 - 9.30 WIB</p>
            <p>Untuk Mempercepat transaksi silahkan kunjungi <a href="http://google.com">e-form</a></p>

            <p style={{color: 'red'}}>*harap mendatangi kantor sebelum waktu pelayanan</p>

            <div>
                <Button type="primary">Selesai Layanan</Button>
            </div>
        </DashboardLayout>
)
}

export default Beranda
