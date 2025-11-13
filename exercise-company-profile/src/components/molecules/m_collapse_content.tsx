import * as React from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import AtomText from '../atoms/a_text';

interface IMoleculesCollapseContentProps {
    title: string
    content: string
    setIsOpen: any
    isOpen: boolean
}

const MoleculesCollapseContent: React.FunctionComponent<IMoleculesCollapseContentProps> = ({title, content, setIsOpen, isOpen}) => {
    return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="flex flex-col mb-5 border-2 py-5 rounded-xl">
            <div className="flex items-center justify-between w-full px-5">
                <AtomText type='content-title' text={title}/>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="icon" className="size-8">
                        <ChevronsUpDown />
                        <span className="sr-only">Toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="flex flex-col gap-2">
                <hr className='my-2'/>
                <div className='px-5'>
                    <AtomText type='content' text={content}/>
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
};

export default MoleculesCollapseContent;
