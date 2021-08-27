import React from 'react';
import { Link } from 'react-router-dom';
import Sidenav from '../../components/Sidenav';

const DaftarBank = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-3">
                    <Sidenav />
                </div>
                <div className="col-9">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center">Daftar Bank</h1>
                            <form style={{maxWidth: '400px'}}>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Cari bank" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-primary" type="button" id="button-addon2">Cari</button>
                                    </div>
                                </div>
                            </form>

                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>No</th>
                                        <th>Nama bank</th>
                                        <th>Alamat</th>
                                        <th>Detail Antrian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Bank Bri Pagerwojo</td>
                                        <td>Pagerwojo Kesamben Blitar</td>
                                        <td>
                                            <Link to="/detail-info-antrian/2">Lihat Detail</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Bank Bri Pagerwojo</td>
                                        <td>Pagerwojo Kesamben Blitar</td>
                                        <td>
                                            <Link to="/detail-info-antrian/2">Lihat Detail</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Bank Bri Pagerwojo</td>
                                        <td>Pagerwojo Kesamben Blitar</td>
                                        <td>
                                            <Link to="/detail-info-antrian/2">Lihat Detail</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DaftarBank