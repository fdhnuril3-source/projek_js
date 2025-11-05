import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return (
        <nav class="nav">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/produk">Produk</a>
            <a class="nav-link" href="/kategori">Kategori</a>
            <a class="nav-link" href="/contact">Contact</a>
        </nav>
    );

};

export default Navbar;