import { format, parseISO } from 'date-fns';
import React, { useEffect, useRef, useState } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import api from '../../services/api';
import Draggable from 'react-draggable';

import { Container, Form, Buttons, NewOSButton } from './styles';

export default function NovaOS({ cliente, OSEditId, setOSEditId }) {
    const [newOS,setNewOS] = useState(false);
    const [formActive, setFormActive] = useState('');
    const defaultOS = {
        codigo: null,
        cliente: cliente.codigo,
        loja: cliente.loja,
        razaosocial: cliente.razao,
        emissao: format(new Date(),'yyyy-MM-dd'),
        horaini: null,
        horafim: null,
        horastotais: null,
        remoto: null,
        status: null,
        validado: null,
        valorhora: 0,
        entregue: null,
        detalhes: [],
        desconto: null
    }
    const [OS,setOS] = useState(defaultOS)
    const remotoRef = useRef();
    const tipoRef = useRef();
    const projetoRef = useRef();
    const maxLines = 10;
    const tipos = [{codigo: '001', descricao: 'Almoço'},
    {codigo: '002', descricao: 'Suporte'},
    {codigo: '003', descricao: 'Desenvolvimento'}]

    async function getThisOS(OSEditId) {
      const response = await api.get(`/myoss?OSid=${OSEditId}`);
      const { data } = response;
      const res = data.result[0];
      setOS({...OS,
        codigo: res.codigo,
        emissao: format(parseISO(res.emissao),'yyyy-MM-dd'),
        horaini: res.horaini,
        horafim: res.horafim,
        horastotais: res.horastotais,
        remoto: res.remoto,
        status: res.status,
        validado: res.validado,
        valorhora: res.valorhora,
        entregue: res.entregue,
        detalhes: res.detalhes,
        desconto: res.desconto
        })
        setFormActive('active');
    }

    useEffect(() => {
        if(OSEditId) {
            getThisOS(OSEditId)
        }
    },[OSEditId])

    function handleCancel() {
        setFormActive('');
        setOS(defaultOS);
        setNewOS(false);
        setOSEditId(null);
    }

    function handleNew() {
        setNewOS(true)
        setFormActive('active');
    }

    const horarios = [
        '00:00','00:15','00:30','00:45','01:00','01:15','01:30','01:45','02:00','02:15','02:30',
        '02:45','03:00','03:15','03:30','03:45','04:00','04:15','04:30',
        '04:45','05:00','05:15','05:30','05:45','06:00','06:15','06:30',
        '06:45','07:00','07:15','07:30','07:45','08:00','08:15','08:30',
        '08:45','09:00','09:15','09:30','09:45','10:00','10:15','10:30',
        '10:45','11:00','11:15','11:30','11:45','12:00','12:15','12:30',
        '12:45','13:00','13:15','13:30','13:45','14:00','14:15','14:30',
        '14:45','15:00','15:15','15:30','15:45','16:00','16:15','16:30',
        '16:45','17:00','17:15','17:30','17:45','18:00','18:15','18:30',
        '18:45','19:00','19:15','19:30','19:45','20:00','20:15','20:30',
        '20:45','21:00','21:15','21:30','21:45','22:00','22:15','22:30',
        '22:45','23:00','23:15','23:30','23:45','00:00']
  return (
    <Container>
        {cliente ?
        <NewOSButton style={{  }}>
            <h3>{cliente.fantasia}</h3>
            <h4>Incluir OS</h4>
            <button type='button' onClick={handleNew}>
                +
            </button>
        </NewOSButton>
    : null }
        {(newOS || OSEditId) && cliente ?
        <>
        <Form className={formActive}>
            <h3>{cliente.fantasia}</h3>
            <div style={{ width: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center' }}>
                        <FaCalendarAlt style={{ fontSize: 16, marginRight: 6 }} />
                        <input type="date" required onChange={e => setOS({...OS, emissao: e.target.value})} value={OS.emissao}  style={{ padding: 5}} />
                    </div>
                    <div style={{ marginTop: 12 }}>
                        Atendimento
                        <select required style={{ padding: 5 }} value={OS.remoto} onChange={e => setOS({...OS,remoto: e.target.value })}>
                            <option value=''>Selecione...</option>
                            <option value='S'>Remoto</option>
                            <option value='N'>Presencial</option>
                        </select>
                    </div>
                    <div style={{ marginTop: 12 }}>
                        <label>Hora Inicial: </label>
                        <select required value={OS.horaini} onChange={e => setOS({...OS,horaini: e.target.value })}>
                            <option value=''>- - : - -</option>
                            {horarios.map((hora, index) => {
                                return (<option key={index} value={hora}>{hora}</option>)
                            })}
                        </select>
                    </div>
                    <div style={{ marginTop: 12 }}>
                        <label>Hora Final: </label>
                        <select required value={OS.horafim} onChange={e => setOS({...OS,horafim: e.target.value })}>
                            <option value=''>- - : - -</option>
                            {horarios.map((hora, index) => {
                                return (<option key={index} value={hora}>{hora}</option>)
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>Item</th>
                        <th>Tipo</th>
                        <th>Projeto</th>
                        <th style={{ textAlign: 'center' }}>Das</th>
                        <th style={{ textAlign: 'center' }}>Até</th>
                        <th width="250">Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    { [1,2,3,4,5,6,7,8,9,10].map((line,index) => 
                    <tr key={line}>
                        <td style={{ textAlign: 'center' }}>{line.toString().padStart(2, '0')}</td>
                        <td>
                            <select value={OSEditId && OS.detalhes[index] ? OS.detalhes[index].tipo : null}>
                                <option value=''>Tipo...</option>
                                {tipos.map((tipo, tipoIndex) => {
                                    return (<option key={tipoIndex} value={tipo.codigo} 
                                        >{tipo.descricao}</option>)
                                })}
                            </select>
                        </td>
                        <td>
                            <select value={OSEditId && OS.detalhes[index] ? OS.detalhes[index].projeto : null}>
                                <option value=''>Projeto...</option>
                                {cliente.projetos.map((proj, projIndex) => {
                                    return (<option key={projIndex} value={proj.codigo}
                                        >{proj.descricao}</option>)
                                })}
                            </select>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                            <select value={OSEditId && OS.detalhes[index] ? OS.detalhes[index].horaini : null}>
                                <option value=''>- - : - -</option>
                                {horarios.map((hora, iniIndex) => {
                                    return (<option key={iniIndex} value={hora}
                                        >{hora}</option>)
                                })}
                            </select>
                        </td>
                        <td style={{ textAlign: 'center' }}>
                            <select value={OSEditId && OS.detalhes[index] ? OS.detalhes[index].horafim : null}>
                                <option value=''>- - : - -</option>
                                {horarios.map((hora, iniIndex) => {
                                    return (<option key={iniIndex} value={hora}
                                        >{hora}</option>)
                                })}
                            </select>
                        </td>
                        <td>
                            <textarea placeholder="Detalhamento..." value={OSEditId && OS.detalhes[index] ? OS.detalhes[index].descricao : null}></textarea>
                        </td>
                    </tr>
                    )}
                    
                    
                </tbody>
            </table>
            <Buttons>
                <button className='cancel' type='button' onClick={handleCancel}>Cancelar</button>
                {OSEditId && OS.status === 'F' ? <div style={{ color: '#8c8'}}>OS Faturada</div> : <button className='send'>Salvar</button> }
            </Buttons>
        </Form>
        </>
        : null}
    </Container>
  );
}