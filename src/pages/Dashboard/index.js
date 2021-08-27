import React from 'react';
import Sidenav from '../../components/Sidenav';

const Dashboard = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <Sidenav />
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Dashboard</h1>
                            {/* <p className="text-center">Anda sedang tidak membooking antrian saat ini</p>
                            <p className="text-center">Silahkan lakukan booking antrian melalui aplikasi pada H-1</p> */}

                            <h3>Detail Booking</h3>
                            <div className="my-2">
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-between">
                                        <p>Nomor Antrian</p>
                                        <p>:</p>
                                    </div>
                                    <div className="col-9">
                                        <p>23</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-between">
                                        <p>Bank Tujuan</p>
                                        <p>:</p>
                                    </div>
                                    <div className="col-9">
                                        <p>Bank KCP Banjaran</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-between">
                                        <p>Keperluan Layanan</p>
                                        <p>:</p>
                                    </div>
                                    <div className="col-9">
                                        <p>Transaksi</p>
                                    </div>
                                </div>
                            </div>

                            <p>Nomor antrian akan dilayani pada tanggal</p>
                            <p>Jum'at 9 Juni 2021, pukul 9.00 - 9.30 WIB</p>
                            <p>Untuk Mempercepat transaksi silahkan kunjungi <a href="http://google.com">e-form</a></p>
                            <p>*harap mendatangi kantor sebelum waktu pelayanan</p>

                            <div className="text-end">
                                <button className="btn btn-primary">Selesai Layanan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
