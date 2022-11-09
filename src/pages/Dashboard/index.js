import React, { useEffect, useState } from "react";

import { Scroll, Container, ClienteButton, Sidebar, OSListItem } from "./styles";

import { parseISO, format } from 'date-fns';

import api from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import { loginRefresh, logout } from "../../store/modules/auth/actions";
import NovaOS from "../../components/NovaOS";

export default function Dashboard() {
  const [myOSs, setMyOSs] = useState([]);
  const [clientes,setClientes] = useState([]);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [OSEditId, setOSEditId] = useState(null);
  const [refreshToken, setRefreshToken] = useState(false);
  const user = useSelector(state => state.user);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const controller = new AbortController();

  async function getOSs() {
    setLoading(true)
    try {
      let filters = "";
      filters += filter && filter.cliente ? "cliente="+filter.cliente+"&" : null
      filters += filter && filter.dataDe ? "datade="+filter.dataDe+"&" : null
      filters += filter && filter.dataAte ? "dataate="+filter.dataAte+"&" : null

      await api.get(`/myoss?${filters }`)
      .then(response => setMyOSs(response.data.result)
      .catch((err) => setRefreshToken(err.response.status === 401))
      .finally(() => setLoading(false)));
      return () => {
        controller.abort();
      }
    } catch(err) {
      // console.log(err)
    }
  }

  useEffect(() => {
    if(refreshToken) {
      dispatch(loginRefresh(auth.token, user, auth.refresh_token))
      setRefreshToken(false);
    }
  },[refreshToken])

  async function getClientes() {
    try {
      await api.get('/clients', { signal: controller.signal })
      .then(response => setClientes(response.data.result))
      .catch((err) => setRefreshToken(err.response.status === 401))
      .finally(() => setLoading(false));
      return () => {
        controller.abort();
      }
    } catch(err) {
    }
  }

  useEffect(() => {
    if(!clientes.length) {
      getClientes()
    }
  },[])

  useEffect(() => {
    if(filter && (filter.cliente || (filter.dataDe && filter.dataAte))) {
      getOSs()
    }
  },[filter])

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Container>
      { !clientes ? null : 
      <>
      <Sidebar>
        <div style={{ height: 64, borderBottom: '1px solid #efefef', display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
          <h2 style={{ color: "#222" }}>Pharos System</h2>
        </div>
        <div>
          <h3>Período</h3>
          <input type='date' onChange={e => setFilter({...filter,dataDe: e.target.value })} style={{ padding: 10,border: 'none' }} />
          <input type='date' onChange={e => setFilter({...filter,dataAte: e.target.value })} style={{ padding: 10,border: 'none' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <h2>Clientes</h2>
        {clientes.map((cliente,index) => (
          <ClienteButton key={index} type='button' 
          className={filter && filter.cliente === cliente.codigo ? 'active' : ''}
          onClick={() => setFilter({...filter,cliente: cliente.codigo })}>
            {cliente.fantasia}
          </ClienteButton>
        ))}
        </div>
      </Sidebar>
      <main style={{ flex: 1, overflow: 'hidden' }}>
        <header>
          <div></div>
          <div style={{ textAlign: 'right'}}>
            Olá, <strong>{user.profile.userFullName}</strong>
            <br/>
            <button type='button' onClick={handleLogout} style={{ fontSize: 12, color: "#868686", background: 'none', border: 'none'}}>Sair</button>
          </div>
        </header>
        { filter && filter.cliente ? 
          <>
        <NovaOS cliente={filter && filter.cliente ? clientes.filter(cli => cli.codigo === filter.cliente)[0] : null} OSEditId={OSEditId} setOSEditId={setOSEditId} />
        <h4>Minhas últimas OS's deste cliente</h4>
        </>
         : null }
        <Scroll style={{ height: 380, width: 'auto' }}>
          <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'no-wrap', flex: 1}}>
          {
            myOSs.length > 0 ?
            
              myOSs.map((myOS,index) => (
                <OSListItem key={index} onClick={() => setOSEditId(myOS.codigo)} style={{ width: 212, height: 350, backgroundColor: "#fafafa", border: '1px solid #efefef',borderRadius: 20, padding: 20, margin: 5 }}>
                  <h5 style={{ fontSize: 11, maxWidth: 170, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap'}}>{myOS.razaosocial}</h5>
                  <p>{format(parseISO(myOS.emissao),'dd/MM/yyyy')} - {myOS.horaini} às {myOS.horafim}</p>
                  <div className={`status ${myOS.status}`}>{myOS.status === 'F' ? 'Faturado' : myOS.status === 'P' ? 'Pendente' : myOS.status}</div>
                  
                  {
                  myOS.detalhes.map((detalhe,index) => <div style={{ textAlign: 'justify' }}>
                    <div className="detalhe" style={{ fontSize: 11, borderTop: '1px dashed #ccc', padding: '6px 0' }}>
                      <div>{detalhe.tipo_desc}</div>
                      <div>{detalhe.projeto_desc}</div>
                      <div>{detalhe.horaini} - {detalhe.horafim}</div>
                      <div className="textarea">{detalhe.descricao}</div>
                    </div>
                  </div> 
                  )
                  }
                </OSListItem>
              ))
            : null
            }
          </div>
        </Scroll>
      </main>
      </>
    }
    </Container>
  );
}
