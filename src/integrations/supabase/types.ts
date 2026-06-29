export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ai_practice_sheets: {
        Row: {
          content: string
          created_at: string
          id: string
          prompt: string | null
          subject: Database["public"]["Enums"]["subject_kind"]
          title: string
          topic: string | null
          tutor_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          prompt?: string | null
          subject: Database["public"]["Enums"]["subject_kind"]
          title: string
          topic?: string | null
          tutor_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          prompt?: string | null
          subject?: Database["public"]["Enums"]["subject_kind"]
          title?: string
          topic?: string | null
          tutor_id?: string
        }
        Relationships: []
      }
      availability_overrides: {
        Row: {
          ends_at: string
          id: string
          is_busy: boolean
          note: string | null
          starts_at: string
          tutor_id: string
        }
        Insert: {
          ends_at: string
          id?: string
          is_busy?: boolean
          note?: string | null
          starts_at: string
          tutor_id: string
        }
        Update: {
          ends_at?: string
          id?: string
          is_busy?: boolean
          note?: string | null
          starts_at?: string
          tutor_id?: string
        }
        Relationships: []
      }
      availability_slots: {
        Row: {
          created_at: string
          end_time: string
          id: string
          is_active: boolean
          start_time: string
          tutor_id: string
          weekday: number
        }
        Insert: {
          created_at?: string
          end_time: string
          id?: string
          is_active?: boolean
          start_time: string
          tutor_id: string
          weekday: number
        }
        Update: {
          created_at?: string
          end_time?: string
          id?: string
          is_active?: boolean
          start_time?: string
          tutor_id?: string
          weekday?: number
        }
        Relationships: []
      }
      bookings: {
        Row: {
          created_at: string
          ends_at: string
          id: string
          notes: string | null
          price_pence: number | null
          requested_by: string | null
          starts_at: string
          status: Database["public"]["Enums"]["booking_status"]
          student_id: string | null
          subject: Database["public"]["Enums"]["subject_kind"]
          tutor_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          ends_at: string
          id?: string
          notes?: string | null
          price_pence?: number | null
          requested_by?: string | null
          starts_at: string
          status?: Database["public"]["Enums"]["booking_status"]
          student_id?: string | null
          subject?: Database["public"]["Enums"]["subject_kind"]
          tutor_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          ends_at?: string
          id?: string
          notes?: string | null
          price_pence?: number | null
          requested_by?: string | null
          starts_at?: string
          status?: Database["public"]["Enums"]["booking_status"]
          student_id?: string | null
          subject?: Database["public"]["Enums"]["subject_kind"]
          tutor_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          last_message_at: string
          participant_id: string
          subject: string | null
          tutor_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_message_at?: string
          participant_id: string
          subject?: string | null
          tutor_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_message_at?: string
          participant_id?: string
          subject?: string | null
          tutor_id?: string
        }
        Relationships: []
      }
      expenses: {
        Row: {
          amount_pence: number
          category: string
          created_at: string
          description: string | null
          id: string
          spent_at: string
          tutor_id: string
        }
        Insert: {
          amount_pence: number
          category: string
          created_at?: string
          description?: string | null
          id?: string
          spent_at?: string
          tutor_id: string
        }
        Update: {
          amount_pence?: number
          category?: string
          created_at?: string
          description?: string | null
          id?: string
          spent_at?: string
          tutor_id?: string
        }
        Relationships: []
      }
      invoices: {
        Row: {
          booking_id: string | null
          client_id: string | null
          created_at: string
          due_at: string | null
          id: string
          issued_at: string
          notes: string | null
          number: string
          paid_at: string | null
          status: Database["public"]["Enums"]["invoice_status"]
          subtotal_pence: number
          tax_pence: number
          total_pence: number
          tutor_id: string
        }
        Insert: {
          booking_id?: string | null
          client_id?: string | null
          created_at?: string
          due_at?: string | null
          id?: string
          issued_at?: string
          notes?: string | null
          number: string
          paid_at?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          subtotal_pence?: number
          tax_pence?: number
          total_pence?: number
          tutor_id: string
        }
        Update: {
          booking_id?: string | null
          client_id?: string | null
          created_at?: string
          due_at?: string | null
          id?: string
          issued_at?: string
          notes?: string | null
          number?: string
          paid_at?: string | null
          status?: Database["public"]["Enums"]["invoice_status"]
          subtotal_pence?: number
          tax_pence?: number
          total_pence?: number
          tutor_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          body: string
          conversation_id: string
          created_at: string
          id: string
          is_stuck_alert: boolean
          read_at: string | null
          sender_id: string
        }
        Insert: {
          body: string
          conversation_id: string
          created_at?: string
          id?: string
          is_stuck_alert?: boolean
          read_at?: string | null
          sender_id: string
        }
        Update: {
          body?: string
          conversation_id?: string
          created_at?: string
          id?: string
          is_stuck_alert?: boolean
          read_at?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          body: string | null
          created_at: string
          id: string
          kind: string
          link: string | null
          read_at: string | null
          title: string
          user_id: string
        }
        Insert: {
          body?: string | null
          created_at?: string
          id?: string
          kind: string
          link?: string | null
          read_at?: string | null
          title: string
          user_id: string
        }
        Update: {
          body?: string | null
          created_at?: string
          id?: string
          kind?: string
          link?: string | null
          read_at?: string | null
          title?: string
          user_id?: string
        }
        Relationships: []
      }
      practice_sheet_shares: {
        Row: {
          id: string
          shared_at: string
          sheet_id: string
          student_id: string
        }
        Insert: {
          id?: string
          shared_at?: string
          sheet_id: string
          student_id: string
        }
        Update: {
          id?: string
          shared_at?: string
          sheet_id?: string
          student_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "practice_sheet_shares_sheet_id_fkey"
            columns: ["sheet_id"]
            isOneToOne: false
            referencedRelation: "ai_practice_sheets"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          parent_id: string | null
          phone: string | null
          updated_at: string
          year_group: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          parent_id?: string | null
          phone?: string | null
          updated_at?: string
          year_group?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          parent_id?: string | null
          phone?: string | null
          updated_at?: string
          year_group?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      student_performance: {
        Row: {
          id: string
          is_stuck: boolean
          note: string | null
          recorded_at: string
          score_percent: number | null
          student_id: string
          subject: Database["public"]["Enums"]["subject_kind"]
          time_spent_minutes: number | null
          topic: string | null
        }
        Insert: {
          id?: string
          is_stuck?: boolean
          note?: string | null
          recorded_at?: string
          score_percent?: number | null
          student_id: string
          subject: Database["public"]["Enums"]["subject_kind"]
          time_spent_minutes?: number | null
          topic?: string | null
        }
        Update: {
          id?: string
          is_stuck?: boolean
          note?: string | null
          recorded_at?: string
          score_percent?: number | null
          student_id?: string
          subject?: Database["public"]["Enums"]["subject_kind"]
          time_spent_minutes?: number | null
          topic?: string | null
        }
        Relationships: []
      }
      tutor_settings: {
        Row: {
          currency: string
          hourly_rate_pence: number
          id: string
          min_lesson_hours: number
          tax_rate_percent: number
          tutor_id: string
          updated_at: string
        }
        Insert: {
          currency?: string
          hourly_rate_pence?: number
          id?: string
          min_lesson_hours?: number
          tax_rate_percent?: number
          tutor_id: string
          updated_at?: string
        }
        Update: {
          currency?: string
          hourly_rate_pence?: number
          id?: string
          min_lesson_hours?: number
          tax_rate_percent?: number
          tutor_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "tutor" | "student" | "parent"
      booking_status:
        | "pending"
        | "accepted"
        | "rejected"
        | "completed"
        | "cancelled"
      invoice_status: "draft" | "sent" | "paid" | "overdue" | "void"
      subject_kind: "maths" | "computer_science" | "english" | "other"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["tutor", "student", "parent"],
      booking_status: [
        "pending",
        "accepted",
        "rejected",
        "completed",
        "cancelled",
      ],
      invoice_status: ["draft", "sent", "paid", "overdue", "void"],
      subject_kind: ["maths", "computer_science", "english", "other"],
    },
  },
} as const
