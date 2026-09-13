import { v5 } from "uuid";
import type { MembroEquipeSemId, MembroEquipe } from '../types/Nucti';

const namespace = v5.URL

function genId(ref : string){
    return v5(ref, namespace)
}

export function addIdMember(memberlist: MembroEquipeSemId[]): MembroEquipe[]{
    const result: MembroEquipe[] = memberlist.map((member)=>{
        return {
            ...member,
            id: genId(member.nome+member.cargo)
        }
    })
    return result
}