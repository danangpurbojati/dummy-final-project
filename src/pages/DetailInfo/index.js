import React from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';

const DetailInfo = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <Sidenav />
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Detail Info Antrian</h1>
                            <div className="row">
                                <div className="col-6 d-flex justify-content-between">
                                    <p>Bank</p>
                                    <p>:</p>
                                </div>
                                <div className="col-6">
                                    <p>BRI Unit Pagerwojo</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 d-flex justify-content-between">
                                    <p>Alamat</p>
                                    <p>:</p>
                                </div>
                                <div className="col-6">
                                    <p>Pagerwojo, Kesamben Kabupaten Blitar - Jawa Timur</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 d-flex justify-content-between">
                                    <p>Nomor Antrean</p>
                                    <p>:</p>
                                </div>
                                <div className="col-6 d-flex">
                                    <p className="me-2">23</p>
                                    <span>Pukul 09.00</span>
                                </div>
                            </div>

                            <div className="d-flex justify-content-between">
                                <Link className="btn btn-primary" to="/">Kembali</Link>
                                <Link className="btn btn-primary" to="/">Booking Untuk Besok</Link>
                            </div>
                            <p className="text-end mt-3">*Kuota Besok Penuh</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailInfo
