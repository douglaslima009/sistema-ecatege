import Head from 'next/head';
import Header from "../components/Header.js";
import EditAssociate from "../components/EditAssociate.js";
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from "next/link";




export default function Home() {
  return (
    <div>
      
    <Header />

    <EditAssociate />

    </div>
  )
}