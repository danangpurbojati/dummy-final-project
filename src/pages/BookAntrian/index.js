import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Form, Button, Select } from 'antd';

const BookAntrian = () => {
    return (
        <DashboardLayout>
            <h1>Book Nomor Antrian</h1>
            <p>Book antrian untuk besok (Jum'at, 9 Juli 2021)</p>
            <Form>
                <Form.Item label="Bank Tujuan">
                    <Select
                        showSearch
                        placeholder="Ketik / Pilih Unit Kerja Cabang"
                    >
                        <Select.Option>Bank KCP Soerang</Select.Option>
                        <Select.Option>Bank KCP Banjaran</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Keperluan Layanan">
                    <Select
                        placeholder="Pilih Layanan"
                    >
                        <Select.Option>Pendaftaran (dilayani oleh Customer Services)</Select.Option>
                        <Select.Option>Transaksi (dilayani oleh Teller)</Select.Option>
                        <Select.Option>Pinjaman (dilayani oleh Petugas Kredit)</Select.Option>
                    </Select>
                </Form.Item>
                <Button type="primary">dapatkan nomor antrian</Button>
            </Form>
        </DashboardLayout>
    )
}

export default BookAntrian
