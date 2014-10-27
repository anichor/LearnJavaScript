/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function initStorage() {
   localStorage.setItem("page_id", 0);
};

function store(id){
   localStorage.setItem("page_id", id);
};

function retrive() {
    return localStorage.getItem("page_id");
};