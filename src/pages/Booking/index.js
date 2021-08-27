import React from 'react';
import Sidenav from '../../components/Sidenav';

const Booking = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <Sidenav />
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Halaman Booking</h1>
                            <p>Book antrian untuk besok (Jum'at, 9 Juli 2021)</p>
                            <form>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <label>Bank Tujuan</label>
                                    </div>
                                    <div className="col-8">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Pilih Unit Kerja</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-4">
                                        <label>Keperluan Layanan</label>
                                    </div>
                                    <div className="col-8">
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>Pilih Layanan</option>
                                            <option value="1">Pendaftaran</option>
                                            <option value="2">Transaksi</option>
                                            <option value="3">Pinjaman</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">dapatkan nomor antrian</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Booking
