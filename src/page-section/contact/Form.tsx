"use client";
import { useLocale } from "next-intl";
import Typography from "@/src/component/Typography";
import Input from "@/src/component/Input";
import Button from "@/src/component/Button";
import { getDictionary } from "@/lib/content";
import type { Locale } from "@/lib/content/types";

export default function Form() {
    const dict = getDictionary(useLocale() as Locale);
    return (
        <div className="bg-white dark:bg-[#070707] flex justify-center items-center py-[48px] md:py-[80px] px-[16px] md:px-[72px]">
            <div className="w-full lg:w-[35%] flex flex-col items-start gap-[48px]">
                <div className="flex flex-col items-start gap-[24px]">
                    <Typography size={32} weight={600}>
                        {dict.form.title}
                    </Typography>
                    <Typography size={16}>
                        {dict.form.subtitle}
                    </Typography>
                </div>
                <div className="w-full flex flex-col gap-[24px]">
                    <div className="w-full flex gap-[16px]">
                        <Input type="text" isRequired label={dict.form.firstName} placeholder={dict.form.firstName} />
                        <Input type="text" isRequired label={dict.form.lastName} placeholder={dict.form.lastName} />
                    </div>
                    <Input type="email" isRequired label={dict.form.email} placeholder={dict.form.email} />
                    <Input type="textarea" isRequired label={dict.form.message} placeholder={dict.form.message} />
                    <Button variant="form" className="px-[32px] py-[16px]">
                        {dict.form.submit}
                    </Button>
                    <Typography size={14} weight={500} className="text-center">
                        {dict.form.termsPrefix} <span className="text-[#873AE3]">{dict.form.termsLink}</span> {dict.form.and} <br />
                        <span className="text-[#873AE3]">{dict.form.privacyLink}</span>
                    </Typography>
                </div>
            </div>
        </div>
    )
}
