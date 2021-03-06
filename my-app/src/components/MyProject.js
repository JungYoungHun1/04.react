import React, { useRef, useState } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Sel from './Sel'
function MyProject() {
    // const inputref = useRef()
    // const deleteref = useRef()
    const allSelect = () => {
        let resultElem = document.getElementById('result')
        resultElem.innerHTML = ''
        axios.get('http://localhost:8080/project/api/dept').then((res) =>
            res.data.forEach((element) => {
                resultElem.innerHTML +=
                    'deptno : ' +
                    element.deptno +
                    ' dname : ' +
                    element.dname +
                    ' loc :' +
                    element.loc +
                    '<br/>'
            })
        )
    }

    // const selectDept = () => {
    //     let resultElem = document.getElementById('result')
    //     axios
    //         .get(
    //             'http://localhost:8080/project/api/dept/' +
    //                 inputref.current.value
    //         )
    //         .then(
    //             (res) =>
    //                 (resultElem.innerHTML =
    //                     'deptno : ' +
    //                     res.data.deptno +
    //                     ' dname : ' +
    //                     res.data.deptno +
    //                     ' loc :' +
    //                     res.data.loc +
    //                     '<br/>')
    //         )
    // }

    // const deleteDept = () => {
    //     let resultElem = document.getElementById('result')
    //     resultElem.innerHTML = ''
    //     axios
    //         .delete(
    //             'http://localhost:8080/project/api/dept/' +
    //                 deleteref.current.value
    //         )
    //         .then((res) => (resultElem.innerHTML = '삭제 완료'))
    // }
    // const updateDept = () => {
    //     let resultElem = document.getElementById('result')
    //     let deptnoElem = document.getElementById('updateDeptno')
    //     let dnameElem = document.getElementById('updateDname')
    //     let locElem = document.getElementById('updateLoc')
    //     resultElem.innerHTML = ''
    //     axios
    //         .put(
    //             'http://localhost:8080/project/api/dept/' + deptnoElem.value,
    //             {
    //                 deptno: deptnoElem.value,
    //                 dname: dnameElem.value,
    //                 loc: locElem.value,
    //             },
    //             {
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                 },
    //             }
    //         )
    //         .then((res) => (resultElem.innerHTML = '수정 완료'))
    // }

    // const insertDept = () => {
    //     let resultElem = document.getElementById('result')
    //     let deptnoElem = document.getElementById('insertDeptno')
    //     let dnameElem = document.getElementById('insertDname')
    //     let locElem = document.getElementById('insertLoc')
    //     resultElem.innerHTML = ''
    //     axios
    //         .post(
    //             'http://localhost:8080/project/api/dept',
    //             {
    //                 deptno: deptnoElem.value,
    //                 dname: dnameElem.value,
    //                 loc: locElem.value,
    //             },
    //             {
    //                 headers: {
    //                     'Content-type': 'application/json',
    //                 },
    //             }
    //         )
    //         .then((res) => (resultElem.innerHTML = '작성 완료'))
    // }

    return (
        <div>
            <div>
                {/* <h1>Dept 출력</h1>
                <button onClick={allSelect}>allSelect</button>
                <hr></hr>
                <h1>특정 Dept 출력</h1>
                <input type="text" ref={inputref}></input>
                <button onClick={selectDept}>select</button>
                <hr></hr>
                <h1>Dept 작성</h1>
                deptno : <input id="insertDeptno" type="text"></input>
                <br></br>
                dname : <input id="insertDname" type="text"></input>
                <br></br>
                loc : <input id="insertLoc" type="text"></input>
                <br></br>
                <button onClick={insertDept}>insert</button>
                <hr></hr>
                <h1>Dept 수정</h1>
                deptno : <input id="updateDeptno" type="text"></input>
                <br></br>
                dname : <input id="updateDname" type="text"></input>
                <br></br>
                loc : <input id="updateLoc" type="text"></input>
                <br></br>
                <button onClick={updateDept}>update</button>
                <hr></hr>
                <h1>Dept 삭제</h1>
                <input type="text" ref={deleteref}></input>
                <button onClick={deleteDept}>delete</button>
                <hr></hr>
                <h1>결과</h1>
                <div id="result"></div> */}
                <h1>Dept 출력</h1>
                <button onClick={allSelect}>allSelect</button>
                <hr></hr>
                <h1>결과</h1>
                <div id="result"></div>
            </div>
        </div>
    )
}

export default MyProject
