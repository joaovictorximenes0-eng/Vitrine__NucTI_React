import { v5 } from "uuid";
import type { MembroEquipeSemId, MembroEquipe, ProjetoSemId, Projeto } from '../types/Nucti';

const namespace = v5.URL

function genId(ref : string){
    return v5(ref, namespace)
}

export function addIdMember(memberlist: MembroEquipeSemId[], showIds=false): MembroEquipe[]{
    const result: MembroEquipe[] = memberlist.map((member,index)=>{
        const genereted_id = genId(index.toString()+member.categoria[0]).replaceAll('-','')
        if(showIds) console.log(`${member.nome} - Id gerado: ${member.foto}`);
        return {
            ...member,
            id: genereted_id
        }
    })
    return result
}

export function addIdProject(projectList: ProjetoSemId[], showIds=false): Projeto[]{
    const result: Projeto[] = projectList.map((project,index)=>{
        const genereted_id = genId(index.toString()+'p').replaceAll('-','')
        if(showIds) console.log(`${project.titulo} - Id gerado: ${genereted_id}`);
        return {
            ...project,
            id: genereted_id
        }
    })
    return result
}