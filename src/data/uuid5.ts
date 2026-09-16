import { v5 } from "uuid";
import type { MembroEquipeSemId, MembroEquipe, ProjetoSemId, Projeto } from '../types/Nucti';

const namespace = v5.URL

function genId(ref : string){
    return v5(ref, namespace)
}
function nameLetterToCode(name: string[], pos: 'first' | 'second', n: 0 | 1): string{
    /** Impede que acentos e letras em minusculo troquem o ID */
    return name[pos == 'first' ? 0 : 1].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase().charCodeAt(n).toString()
}
export function addIdMember(memberlist: MembroEquipeSemId[], showIds=false): MembroEquipe[]{
    const result: MembroEquipe[] = memberlist.map((member)=>{
        
        const name_array = member.nome.split(' ')
        const fl_code1 = nameLetterToCode(name_array,'first',0)
        const fl_code2 = nameLetterToCode(name_array,'second',0)
        const sl_code1 = nameLetterToCode(name_array,'first',1)
        const sl_code2 = nameLetterToCode(name_array,'second',1)

        /** Primeira e segunda letra do nome 1 junto com a primeira e segunda letra do nome 2 
         *  formam o código para gerar o ID*/

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

        const fl_code1 = nameLetterToCode(name_array,'first',0)
        const fl_code2 = name_array.length > 1 ? nameLetterToCode(name_array,'second',0) : 'p'
        const sl_code1 = nameLetterToCode(name_array,'first',1)
        const sl_code2 = name_array.length > 1 ? nameLetterToCode(name_array,'second',1) : 'p'

        const genereted_id = genId(fl_code1+fl_code2+sl_code1+sl_code2).replaceAll('-','')
        if(showIds) console.log(`${project.titulo} - Id gerado: ${genereted_id}`);
        return {
            ...project,
            id: genereted_id
        }
    })
    return result
}