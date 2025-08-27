export type Novelty = "Practical" | "Balanced" | "Bold";

export type Chips = {
  domain: string[];     // multi
  format: string[];     // multi
  audience: string[];   // multi
  novelty: Novelty;     // single
  visibility: string[]; // multi
  boundaries: string[]; // multi
};

export type Card = {
    id: string;
    title: string;
    one_line_hook: string;
    tags: {
      domain: string[];
      format: string[];
      audience: string[];
      visibility: string[];
      novelty: Novelty;
    };

    boundaries_ok: {
        budget_ok: boolean;
        travel_ok: boolean;
        school_ok: boolean;
        device_ok: boolean;
        social_ok: boolean;
      };
      standout_reason: string;
      example_link?: string;
    };