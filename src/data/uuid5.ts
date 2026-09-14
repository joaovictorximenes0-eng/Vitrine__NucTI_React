import { v5 } from "uuid";
import type { MembroEquipeSemId, MembroEquipe, ProjetoSemId, Projeto } from '../types/Nucti';

const namespace = v5.URL

function genId(ref : string){
    return v5(ref, namespace)
}

export function addIdMember(memberlist: MembroEquipeSemId[], showIds=false): MembroEquipe[]{
    const result: MembroEquipe[] = memberlist.map((member)=>{
        
        const name_array = member.nome.split(' ')
        const fl_code1 = name_array[0].toUpperCase().charCodeAt(0).toString()
        const fl_code2 = name_array[1].toUpperCase().charCodeAt(0).toString()
        const sl_code1 = name_array[0].toUpperCase().charCodeAt(1).toString()
        const sl_code2 = name_array[1].toUpperCase().charCodeAt(1).toString()

        const genereted_id = genId(fl_code1+fl_code2+sl_code1+sl_code2).replaceAll('-','')
        if(showIds) console.log(`${member.nome} - Id gerado: ${genereted_id}`);
        return {
            ...member,
            id: genereted_id
        }
    })
    return result
}

export function addIdProject(projectList: ProjetoSemId[], showIds=false): Projeto[]{
    const result: Projeto[] = projectList.map((project,)=>{
        const name_array = project.titulo.split(' ')
        console.log(name_array.length)
        const fl_code1 = name_array[0].toUpperCase().charCodeAt(0).toString()
        const fl_code2 = name_array.length > 1 ? name_array[1].toUpperCase().charCodeAt(0).toString() : 'p'
        const sl_code1 = name_array[0].toUpperCase().charCodeAt(1).toString()
        const sl_code2 = name_array.length > 1 ? name_array[1].toUpperCase().charCodeAt(1).toString() : 'p'

        const genereted_id = genId(fl_code1+fl_code2+sl_code1+sl_code2).replaceAll('-','')
        if(showIds) console.log(`${project.titulo} - Id gerado: ${genereted_id}`);
        return {
            ...project,
            id: genereted_id
        }
    })
    return result
}