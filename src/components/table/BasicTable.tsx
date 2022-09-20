import React, { useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from "./columns";
import './table.css'
import { useLocation } from "react-router-dom";
import Modal from '../../components/Modal/Modal';


export const BasicTable = () => {

    
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState({});
    
    const handleShow = (selected) => {
      setSelectedRow(selected);
      setModalOpen(true);
      };
   
    const location =  useLocation() as any;
    const columns = useMemo(() => COLUMNS,[])
    const data = useMemo(()=> location.state.data.continent.countries,[])
    const nome = location.state.name
    const CPF = location.state.cpf
    //const name = location.state.formState.name 

    const tableInstance = useTable({
        columns,
        data
    })

    const {getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance

   /*  useEffect(()=>{console.log(location.state.data.continent.countries)},[location]) */

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) =>(
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))
                        }
                    
                </tr>
                ))}       
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row=>{
                        prepareRow(row)
                        return(
                            <tr className="openModalBtn" {...row.getRowProps()} 
                            onClick={() => {handleShow(row.original); console.log(row.original)}  }
                                
                            >
                                 {modalOpen && <Modal setOpenModal={handleShow} nome={nome} CPF= {CPF} />}

                                {row.cells.map((cell)=>{
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })
                }
                <tr>
                    <td>

                    </td>
                </tr>
            </tbody>
            
            <div

                className="openModalBtn"
                onClick={() => {
                setModalOpen(true);
                }}
            >

            </div>

            {modalOpen && <Modal setOpenModal={setModalOpen} nome={nome} CPF= {CPF}/>}
        
        </table>
    )
}

export default BasicTable


//onClick={() => console.log(row.original)}